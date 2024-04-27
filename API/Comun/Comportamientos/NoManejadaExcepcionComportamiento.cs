using MediatR;

namespace API.Comun.Comportamientos
{
    public class NoManejadaExcepcionComportamiento<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
        where TRequest : IRequest<TResponse>
    {
        private readonly ILogger<TRequest> _registrador;

        public NoManejadaExcepcionComportamiento(ILogger<TRequest> registrador)
        {
            _registrador = registrador;
        }

        public async Task<TResponse> Handle(TRequest solicitud, RequestHandlerDelegate<TResponse> siguiente,
             CancellationToken cancelacionToken)
        {
            try
            {
                return await siguiente();
            }
            catch (Exception ex)
            {
                var nombreSolicitud = typeof(TRequest).Name;

                _registrador.LogError(ex,
                    "Solicitud: Excepción no manejada para la solicitud {Nombre} {@Solicitud}",
                    nombreSolicitud, solicitud);

                throw;
            }
        }
    }
}
