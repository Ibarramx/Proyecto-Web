using FluentValidation;

namespace API.Comun.Extensiones
{
    public static class FluentValidationExtension
    {
        public static IRuleBuilderOptions<T, byte[]> TamanoMaximo<T>(this IRuleBuilder<T, byte[]> constructor, int tamanoMaximo)
        {
            return constructor
                .Must(x => x == null || x.Length <= tamanoMaximo)
                    .WithMessage("{PropertyName} excede el tamaño máximo " + $"({tamanoMaximo} bytes).");
        }

        public static IRuleBuilderOptions<T, TValue> UnicoAsync<T, TValue>(this IRuleBuilder<T, TValue> constructor,
            Func<T, TValue, CancellationToken, Task<bool>> correrPromesa)
        {
            return constructor.MustAsync(correrPromesa).WithMessage("{PropertyName} su valor ya se encuentra en uso.");
        }

        public static IRuleBuilderOptions<T, TValue> UnicoAsync<T, TValue>(this IRuleBuilder<T, TValue> constructor,
            Func<TValue, CancellationToken, Task<bool>> correrPromesa)
        {
            return constructor.MustAsync(correrPromesa).WithMessage("{PropertyName} su valor ya se encuentra en uso.");
        }

        public static IRuleBuilderOptions<T, string> Unico<T>(this IRuleBuilder<T, string> constructor,
            Func<T, string, bool> correrPromesa)
        {
            return constructor.Must(correrPromesa).WithMessage("{PropertyName} su valor ya se encuentra en uso.");
        }

        public static IRuleBuilderOptions<T, string> Unico<T>(this IRuleBuilder<T, string> constructor,
            Func<string, bool> correrPromesa)
        {
            return constructor.Must(correrPromesa).WithMessage("{PropertyName} su valor ya se encuentra en uso.");
        }

        public static IRuleBuilderOptions<T, string> Unico<T>(this IRuleBuilder<T, string> constructor,
            Func<T, string, CancellationToken, Task<bool>> correrPromesa)
        {
            return constructor.MustAsync(correrPromesa).WithMessage("{PropertyName} su valor ya se encuentra en uso.");
        }

        public static IRuleBuilderOptions<T, string> Extension<T>(this IRuleBuilder<T, string> constructor,
            string extensionesPermitidas)
        {
            return constructor.MinimumLength(3)
                .MaximumLength(6)
                .Must(x => string.IsNullOrEmpty(x) || x.StartsWith(".") && extensionesPermitidas.Contains(x))
                    .WithMessage("{PropertyName} es una extensión inválida.");
        }

        public static IRuleBuilderOptions<T, int> EsEnum<T>(this IRuleBuilder<T, int> constructor, Type tipoEnum)
        {
            return constructor.Must(x => x == 0 || Enum.IsDefined(tipoEnum, x))
                    .WithMessage("{PropertyName} contiene un valor no válido.");
        }

        public static IRuleBuilderOptions<T, int?> EsEnum<T>(this IRuleBuilder<T, int?> constructor, Type tipoEnum)
        {
            return constructor.Must(x => x == null || Enum.IsDefined(tipoEnum, x))
                    .WithMessage("{PropertyName} contiene un valor no válido.");
        }

        public static IRuleBuilderOptions<T, string> SoloNumero<T>(this IRuleBuilder<T, string> constructor)
        {
            return constructor.Must(x => string.IsNullOrEmpty(x) || x.All(char.IsDigit))
                    .WithMessage("{PropertyName} contiene un valor no válido.");
        }
    }
}