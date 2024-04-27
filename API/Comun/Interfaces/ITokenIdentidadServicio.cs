using API.Comun.Modelos;
using System.Security.Claims;

namespace Aplicacion.Comun.Interfaces
{
    public interface ITokenIdentidadServicio
    {
        string Generar(ReclamosTokenIdentidad reclamos);
        ReclamosTokenIdentidad ObtenerReclamos(IEnumerable<Claim> reclamos);
        Task<bool> ValidarAsync(ReclamosTokenIdentidad reclamos, CancellationToken cancelacionToken = default);
    }
}
