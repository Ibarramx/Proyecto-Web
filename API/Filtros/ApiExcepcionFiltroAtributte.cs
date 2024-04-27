using API.Comun.Excepciones;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace API.Filtros
{
    public class ApiExcepcionFiltroAtributte : ExceptionFilterAttribute
    {
        private readonly IDictionary<Type, Action<ExceptionContext>> _manejadorExcepciones;

        public ApiExcepcionFiltroAtributte()
        {
            _manejadorExcepciones = new Dictionary<Type, Action<ExceptionContext>>
            {
                { typeof(ValidacionException), _ManejarValidacionException },
                { typeof(NoEncontradoException), _ManejarNoEncontradoException },
                { typeof(UnauthorizedAccessException), _MenejarAccesoNoAutorizadoException },
                { typeof(ProhibidoException), _ManejarAccesoProhibidoException }
            };
        }

        public override void OnException(ExceptionContext contexto)
        {
            _MenejarException(contexto);

            base.OnException(contexto);
        }

        private void _MenejarException(ExceptionContext contexto)
        {
            var tipo = contexto.Exception.GetType();

            if (_manejadorExcepciones.ContainsKey(tipo))
            {
                _manejadorExcepciones[tipo].Invoke(contexto);
                return;
            }

            if (contexto.ModelState.IsValid == false)
            {
                _ManejarEstadoModeloInvalidoException(contexto);
                return;
            }

            _ManejarDesconocidaException(contexto);
        }

        private void _ManejarValidacionException(ExceptionContext contexto)
        {
            var excepcion = contexto.Exception as ValidacionException;

            var detalles = new ValidationProblemDetails(excepcion.Errores)
            {
                Type = "https://tools.ietf.org/html/rfc7231#section-6.5.1"
            };

            contexto.Result = new BadRequestObjectResult(detalles);

            contexto.ExceptionHandled = true;
        }

        private void _ManejarEstadoModeloInvalidoException(ExceptionContext contexto)
        {
            var detalles = new ValidationProblemDetails(contexto.ModelState)
            {
                Type = "https://tools.ietf.org/html/rfc7231#section-6.5.1"
            };

            contexto.Result = new BadRequestObjectResult(detalles);

            contexto.ExceptionHandled = true;
        }

        private void _ManejarNoEncontradoException(ExceptionContext contexto)
        {
            var excepcion = contexto.Exception as NoEncontradoException;

            var detalles = new ProblemDetails()
            {
                Type = "https://tools.ietf.org/html/rfc7231#section-6.5.4",
                Title = "El recurso especificado no se encontró.",
                Detail = excepcion.Message
            };

            contexto.Result = new NotFoundObjectResult(detalles);

            contexto.ExceptionHandled = true;
        }

        private void _MenejarAccesoNoAutorizadoException(ExceptionContext contexto)
        {
            var detalles = new ProblemDetails
            {
                Status = StatusCodes.Status401Unauthorized,
                Title = "Sin autorización",
                Type = "https://tools.ietf.org/html/rfc7235#section-3.1"
            };

            contexto.Result = new ObjectResult(detalles)
            {
                StatusCode = StatusCodes.Status401Unauthorized
            };

            contexto.ExceptionHandled = true;
        }

        private void _ManejarAccesoProhibidoException(ExceptionContext contexto)
        {
            var detalles = new ProblemDetails
            {
                Status = StatusCodes.Status403Forbidden,
                Title = "Prohibido",
                Type = "https://tools.ietf.org/html/rfc7231#section-6.5.3"
            };

            contexto.Result = new ObjectResult(detalles)
            {
                StatusCode = StatusCodes.Status403Forbidden
            };

            contexto.ExceptionHandled = true;
        }

        private void _ManejarDesconocidaException(ExceptionContext contexto)
        {
            var detalles = new ProblemDetails
            {
                Status = StatusCodes.Status500InternalServerError,
                Title = "Un error mientras se procesaba la solicitud.",
                Type = "https://tools.ietf.org/html/rfc7231#section-6.6.1"
            };

            contexto.Result = new ObjectResult(detalles)
            {
                StatusCode = StatusCodes.Status500InternalServerError
            };

            contexto.ExceptionHandled = true;
        }

        private void _ManejarMuchasSolicitudesException(ExceptionContext contexto)
        {
            var detalles = new ProblemDetails
            {
                Status = StatusCodes.Status429TooManyRequests,
                Title = "Se ha alcanzo el límite de solicitudes.",
                Type = "https://datatracker.ietf.org/doc/html/rfc6585#section-4"
            };

            contexto.Result = new ObjectResult(detalles)
            {
                StatusCode = StatusCodes.Status429TooManyRequests
            };

            contexto.ExceptionHandled = true;
        }
    }
}
