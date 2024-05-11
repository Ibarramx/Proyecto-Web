using API.Comun.Interfaces;
using API.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using System.Reflection;
using System.Data;

namespace API.Persistencia
{
    public class AplicacionBdContexto : DbContext, IApliacacionBdContexto
    {
        private IDbContextTransaction _actualTransaccion;
        public AplicacionBdContexto(DbContextOptions opciones) : base(opciones)
        {
        }

        public DbSet<Rol> Rol { get; set; }
        public DbSet<Usuario> Usuario { get; set; }

        public override async Task<int> SaveChangesAsync(CancellationToken cancelacionToken = default)
        {
            var resultado = await base.SaveChangesAsync(cancelacionToken);

            return resultado;
        }

        public async Task EmpezarTransaccionAsync()
        {
            if (_actualTransaccion != null)
            {
                return;
            }

            _actualTransaccion = await base.Database.BeginTransactionAsync(IsolationLevel.ReadCommitted)
                .ConfigureAwait(false);
        }

        public async Task MandarTransaccionAsync()
        {
            try
            {
                await SaveChangesAsync().ConfigureAwait(false);

                _actualTransaccion?.Commit();
            }
            catch
            {
                CancelarTransaccion();
                throw;
            }
            finally
            {
                if (_actualTransaccion != null)
                {
                    _actualTransaccion.Dispose();
                    _actualTransaccion = null;
                }
            }
        }

        public void CancelarTransaccion()
        {
            try
            {
                _actualTransaccion?.Rollback();
            }
            finally
            {
                if (_actualTransaccion != null)
                {
                    _actualTransaccion.Dispose();
                    _actualTransaccion = null;
                }
            }
        }

        public async Task<int> ExecutarSqlComandoAsync(string comandoSql, CancellationToken cancelacionToken)
        {
            return await base.Database.ExecuteSqlRawAsync(comandoSql, cancelacionToken);
        }

        public async Task<int> ExecutarSqlComandoAsync(string comandoSql, IEnumerable<object> parametros, CancellationToken cancelacionToken)
        {
            return await base.Database.ExecuteSqlRawAsync(comandoSql, parametros, cancelacionToken);
        }

        protected override void OnModelCreating(ModelBuilder constructor)
        {
            constructor.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            base.OnModelCreating(constructor);
        }
    }
}