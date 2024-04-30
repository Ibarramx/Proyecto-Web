using API.Comun.Interfaces;
using API.Entidades;
using API.Infraestructura.Modelos;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers.Usuarios
{
    [Route("[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IApliacacionBdContexto _contexto;
        public UsuarioController(IApliacacionBdContexto contexto)
        {
            _contexto = contexto;
        }
        private dataUsuarios semilla = new dataUsuarios();

        [HttpGet]
        public ActionResult<IEnumerable<ItemUsuarioDto>> Get()
        {
            var usuarios = (from u in _contexto.Usuario
                            where u.Habilitado
                            select new ItemUsuarioDto
                            {
                                IDUsuario = u.IDUsuario,
                                IDRol = u.IDRol,
                                Nombre = u.Nombre,
                                PrimerApellido = u.PrimerApellido,
                                SegundoApellido = u.SegundoApellido,
                                FechaNacimiento = u.FechaNacimiento,
                                Correo = u.Correo,
                                Telefono = u.Telefono,
                                Genero = u.Genero,
                                NombreUsuario = u.NombreUsuario,
                                Habilitado = u.Habilitado
                            }).ToArray();
                
            return usuarios;
        }

        [HttpGet("{id}")]
        public ActionResult<ItemUsuarioDto> Get(int id)
        {
            var user = (from u in _contexto.Usuario
                                    where u.IDUsuario == id
                                    select new ItemUsuarioDto()
                                    {
                                        IDUsuario = u.IDUsuario,
                                        IDRol = u.IDRol,
                                        Nombre = u.Nombre,
                                        PrimerApellido = u.PrimerApellido,
                                        SegundoApellido = u.SegundoApellido,
                                        FechaNacimiento = u.FechaNacimiento,
                                        Correo = u.Correo,
                                        Telefono = u.Telefono,
                                        Genero = u.Genero,
                                        NombreUsuario = u.NombreUsuario,
                                        Habilitado = u.Habilitado
                                    }).FirstOrDefault();

            return user;
        }

        [HttpPost]
        public ActionResult Post([FromBody] ItemUsuarioDto user)
        {
            var newUser = new Usuario()
            {
                Nombre = user.Nombre,
                PrimerApellido = user.PrimerApellido,
                SegundoApellido = user.SegundoApellido,
                Genero = user.Genero,
                Correo = user.Correo,
                Telefono = user.Telefono,
                NombreUsuario = user.NombreUsuario,
                Contraseña = Base64Encode(user.Contraseña),
                FechaNacimiento = user.FechaNacimiento,
                FechaCreacion = DateTime.Now,
                FechaModificacion = DateTime.Now,
                IDRol = user.IDRol,
                Habilitado = true
            };
            
            _contexto.Usuario.Add(newUser);
            _contexto.SaveChanges();

            return Ok();
        }

        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] ItemUsuarioDto userEdit)
        {
            var user = _contexto.Usuario.Find(id);
            if (user != null)
            {
                user.NombreUsuario = userEdit.NombreUsuario;
                user.Contraseña = Base64Encode(userEdit.Contraseña);
                user.Nombre = userEdit.Nombre;
                user.PrimerApellido = userEdit.PrimerApellido;
                user.SegundoApellido = userEdit.SegundoApellido;
                user.Genero = userEdit.Genero;
                user.Correo = userEdit.Correo;
                user.Telefono = userEdit.Telefono;
                user.FechaNacimiento = userEdit.FechaNacimiento;
                user.IDRol = userEdit.IDRol;
                user.FechaModificacion = DateTime.Now;
            }

            _contexto.SaveChanges();

            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var user = _contexto.Usuario.Find(id);

            if (user != null)
                user.Habilitado = user.Habilitado == false;
            else
                return BadRequest();

            _contexto.SaveChanges();

            return NoContent();
        }
        
        private static string Base64Encode(string plainText) 
        {
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);
            return System.Convert.ToBase64String(plainTextBytes);
        }
    }
}
