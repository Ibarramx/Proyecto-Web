using API.Comun.Comportamientos;
using API.Comun.Interfaces;
using API.Filtros;
using API.Persistencia;
using API.Servicios;
using Aplicacion.Comun.Interfaces;
using FluentValidation;
using FluentValidation.AspNetCore;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Reflection;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Add Swagger/OpenAPI services
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddDbContext<AplicacionBdContexto>(op => op.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConexion")));
builder.Services.AddScoped<IApliacacionBdContexto>(prov => prov.GetService<AplicacionBdContexto>());

builder.Services.AddTransient<ITokenIdentidadServicio, JwtTokenServicio>();

builder.Services.AddTransient<IHasherServicio, Sha512HasherServicio>();

builder.Services.AddMvc(options =>
{
    options.Filters.Add(new ApiExcepcionFiltroAtributte());
});
builder.Services.AddFluentValidationAutoValidation();

builder.Services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(Program).Assembly));

builder.Services.AddTransient(typeof(IPipelineBehavior<,>), typeof(NoManejadaExcepcionComportamiento<,>));
builder.Services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidadorComportamiento<,>));

// Configurar políticas CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("PoliticasCors", builder =>
    {
        builder.AllowAnyOrigin() // Permite cualquier origen
               .AllowAnyMethod() // Permite cualquier método HTTP
               .AllowAnyHeader(); // Permite cualquier encabezado HTTP
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Habilitar CORS
app.UseCors("PoliticasCors");

app.UseAuthorization();

app.MapControllers();

app.Run();
