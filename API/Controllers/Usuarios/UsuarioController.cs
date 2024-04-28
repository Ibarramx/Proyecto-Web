using API.Comun.Interfaces;
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
                                Nombre = u.Nombre,
                                PrimerApellido = u.PrimerApellido,
                                SegundoApellido = u.SegundoApellido,
                                FechaNacimiento = u.FechaNacimiento,
                                NombreUsuario = u.NombreUsuario,
                                Habilitado = u.Habilitado,
                            }).ToArray();
                
            return usuarios;
        }

        [HttpGet("{id}")]
        public ActionResult<ItemUsuarioDto> Get(int id)
        {
            var user = semilla._usuarios.Where(u => u.IDUsuario == id).FirstOrDefault();

            return user;
        }

        [HttpPost]
        public ActionResult Post([FromBody] ItemUsuarioDto usuario)
        {
            semilla._usuarios.Add(usuario);

            return Ok();
        }

        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] string value)
        {
            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var user = semilla._usuarios.Where(u => u.IDUsuario == id).FirstOrDefault();
            semilla._usuarios.Remove(user);

            return NoContent();
        }
    }
}
