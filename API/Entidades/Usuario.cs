using System.ComponentModel.DataAnnotations;

namespace API.Entidades
{
    public class Usuario
    {
        [Key]
        public int IDUsuario { get; set; }
        public int IDRol { get; set; }
        public string Nombre { get; set; }
        public string PrimerApellido { get; set; }
        public string SegundoApellido { get; set; }
        public bool Genero { get; set; }
        public string Correo { get; set; }
        public string Telefono { get; set; }
        public string NombreUsuario { get; set; }
        public string Contraseña { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public DateTime FechaCreacion { get; set; }
        public DateTime FechaModificacion { get; set; }
        public bool Habilitado { get; set; }
    }
}
