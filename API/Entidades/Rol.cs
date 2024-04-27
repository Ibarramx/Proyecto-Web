using System.ComponentModel.DataAnnotations;

namespace API.Entidades
{
    public class Rol
    {
        [Key]
        public int IDRol { get; set; }
        public string Descripcion { get; set; }
        public DateTime FechaCreacion { get; set; }
        public DateTime FechaModificacion { get; set; }
        public bool Habilitado { get; set; }
    }
}
