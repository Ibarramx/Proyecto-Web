namespace API.Comun.Excepciones
{
    public class ProhibidoException : Exception
    {
        public ProhibidoException()
            : base()
        {
        }

        public ProhibidoException(string mensaje)
            : base(mensaje)
        {
        }
    }
}
