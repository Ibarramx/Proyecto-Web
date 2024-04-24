var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Add Swagger/OpenAPI services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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
