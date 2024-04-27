using API.Comun.Modelos;

namespace API.Comun.Mapeo
{
    public static class MapeoExtension
    {
        public static Task<ItemsLista<TDestination>> EnItemsListaAsync<TDestination>(this IQueryable<TDestination> query, CancellationToken cancelacionToken)
            => ItemsLista<TDestination>.CrearAsync(query, cancelacionToken);

        public static ItemsLista<TDestination> EnItemsLista<TDestination>(this IEnumerable<TDestination> enumerable)
            => ItemsLista<TDestination>.Crear(enumerable);
    }
}
