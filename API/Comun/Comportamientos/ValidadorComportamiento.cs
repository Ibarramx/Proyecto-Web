using FluentValidation;
using MediatR;

namespace API.Comun.Comportamientos
{
    public class ValidadorComportamiento<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
        where TRequest : IRequest<TResponse>
    {
        private readonly IEnumerable<IValidator<TRequest>> _validadores;

        public ValidadorComportamiento(IEnumerable<IValidator<TRequest>> validadores)
        {
            _validadores = validadores;
        }

        public async Task<TResponse> Handle(TRequest solicitud, RequestHandlerDelegate<TResponse> siguiente,
            CancellationToken cancelacionToken)
        {
            if (_validadores.Any())
            {
                var contexto = new ValidationContext<TRequest>(solicitud);

                var validationResults = await Task.WhenAll(_validadores.Select(v => v.ValidateAsync(contexto, cancelacionToken)));
                var fallos = validationResults.SelectMany(r => r.Errors).Where(f => f != null).ToList();

                if (fallos.Count != 0)
                {
                    throw new ValidationException(fallos);
                }
            }

            return await siguiente();
        }
    }
}
