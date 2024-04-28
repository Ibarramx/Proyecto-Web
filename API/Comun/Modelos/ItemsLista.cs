using Microsoft.EntityFrameworkCore;

namespace API.Comun.Modelos
{
    public class ItemsLista<T>
    {
        public IList<T> Items { get; }

        public ItemsLista(IList<T> items)
        {
            Items = items;
        }

        public static async Task<ItemsLista<T>> CrearAsync(IQueryable<T> fuente, CancellationToken cancelacionToken)
        {
            var items = await fuente.ToListAsync(cancelacionToken);

            return new ItemsLista<T>(items);
        }

        public static ItemsLista<T> Crear(IEnumerable<T> fuente)
        {
            return new ItemsLista<T>(fuente.ToList());
        }
    }
}
