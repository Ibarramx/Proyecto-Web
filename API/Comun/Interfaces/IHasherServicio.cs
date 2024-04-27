namespace Aplicacion.Comun.Interfaces
{
    public interface IHasherServicio
    {
        string GenerarContrasenaInicial(DateTime fechaNacimiento);
        string GenerarHash(string contrasena);
    }
}
