using Aplicacion.Comun.Interfaces;
using System.Security.Cryptography;
using System.Text;

namespace API.Servicios
{
    public class Sha512HasherServicio : IHasherServicio
    {
        public Sha512HasherServicio()
        {
        }

        public string GenerarContrasenaInicial(DateTime fechaNacimiento)
        {
            string año = "", mes = "", dia = "", contraseña = "";

            año = fechaNacimiento.Year.ToString();
            año = año.Substring(2, 2);

            mes = fechaNacimiento.Month.ToString();
            mes = mes.Length == 1 ? mes = "0" + mes : mes;

            dia = fechaNacimiento.Day.ToString();
            dia = dia.Length == 1 ? dia = "0" + dia : dia;

            contraseña = año + mes + dia;
            contraseña = _GenerarHashSha512(contraseña);

            return contraseña;
        }

        public string GenerarHash(string contrasena)
        {
            return _GenerarHashSha512(contrasena);
        }

        private string _GenerarHashSha512(string cadena)
        {
            var hash = SHA512.HashData(Encoding.UTF8.GetBytes(cadena));

            var sb = new StringBuilder();
            for (var i = 0; i < hash.Length; i++)
            {
                sb.Append(hash[i].ToString(@"x2"));
            }

            return sb.ToString();
        }
    }
}
