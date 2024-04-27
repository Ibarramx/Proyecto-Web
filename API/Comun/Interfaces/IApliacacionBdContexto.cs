using Microsoft.EntityFrameworkCore;
using API.Entidades;

namespace API.Comun.Interfaces
{
    public interface IApliacacionBdContexto
    {
        public DbSet<Rol> Rol { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        Task<int> SaveChangesAsync(CancellationToken cancelacionToken);
        int SaveChanges();
        Task<int> ExecutarSqlComandoAsync(string comandoSql, CancellationToken cancelacionToken);
        Task<int> ExecutarSqlComandoAsync(string comandoSql, IEnumerable<object> parametros, CancellationToken cancelacionToken);
        Task EmpezarTransaccionAsync();
        Task MandarTransaccionAsync();
        void CancelarTransaccion();
    }
}
