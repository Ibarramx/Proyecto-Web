﻿namespace API.Infraestructura.Modelos
{
    public class Usuario
    {
        public int IDUsuario { get; set; }
        public string Nombre { get; set; }
        public string PrimerApellido { get; set; }
        public string SegundoApellido { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string NombreUsuario { get; set; }
        public string Contraseña { get; set; }
        public bool Habilitado { get; set; }

        public string NombreCompleto => Nombre + " " + PrimerApellido + " " + SegundoApellido;
        public string strFechaNacimiento => FechaNacimiento.ToString("dd/MM/yyyy");
    }
}