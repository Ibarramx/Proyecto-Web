namespace API.Comun.Excepciones
{
    public class NoEncontradoException : Exception
    {
        public NoEncontradoException()
            : base()
        {
        }

        public NoEncontradoException(string mensaje)
            : base(mensaje)
        {
        }

        public NoEncontradoException(string mensaje, Exception innerException)
            : base(mensaje, innerException)
        {
        }

        public NoEncontradoException(string nombre, object slug)
            : base($"La entidad \"{nombre}\" ({slug}) no fue encontrada.")
        {
        }
    }
}
