using FluentValidation.Results;

namespace API.Comun.Excepciones
{
    public class ValidacionException : Exception
    {
        public ValidacionException()
            : base("Se ha producido uno o más errores de validación.")
        {
            Errores = new Dictionary<string, string[]>();
        }

        public ValidacionException(IEnumerable<ValidationFailure> fallos)
            : this()
        {
            var fallosGrupos = fallos
                .GroupBy(e => e.PropertyName, e => e.ErrorMessage);

            foreach (var failureGroup in fallosGrupos)
            {
                var nombrePropiedad = failureGroup.Key;
                var propiedadesFallos = failureGroup.ToArray();

                Errores.Add(nombrePropiedad, propiedadesFallos);
            }
        }

        public IDictionary<string, string[]> Errores { get; }
    }
}
