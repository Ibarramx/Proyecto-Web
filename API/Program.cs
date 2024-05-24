using API.Comun.Comportamientos;
using API.Comun.Interfaces;
using API.Filtros;
using API.Persistencia;
using API.Servicios;
using API.Comun.Comportamientos;
using FluentValidation;
using FluentValidation.AspNetCore;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Add Swagger/OpenAPI services
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddDbContext<AplicacionBdContexto>(op => op.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConexion")));
builder.Services.AddScoped<IApliacacionBdContexto>(prov => prov.GetService<AplicacionBdContexto>());

builder.Services.AddTransient(typeof(IPipelineBehavior<,>), typeof(NoManejadaExcepcionComportamiento<,>));
builder.Services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidadorComportamiento<,>));

builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(Program).Assembly));

//builder.Services.AddTransient<IHasherServicio, Sha512HasherServicio>();

builder.Services.AddMvc(options =>
{
    options.Filters.Add(new ApiExcepcionFiltroAtributte());
});
builder.Services.AddFluentValidationAutoValidation();

builder.Services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(Program).Assembly));

// Configurar pol�ticas CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("PoliticasCors", builder =>
    {
        builder.AllowAnyOrigin() // Permite cualquier origen
               .AllowAnyMethod() // Permite cualquier m�todo HTTP
               .AllowAnyHeader(); // Permite cualquier encabezado HTTP
    });
});
builder.Services.AddSwaggerGen();
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
