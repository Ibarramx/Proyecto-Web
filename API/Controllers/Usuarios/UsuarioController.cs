using API.Infraestructura.Modelos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.Kestrel.Core.Internal.Http;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers.Usuarios
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private static List<Usuario> _usuarios = new List<Usuario>
        {
            new Usuario
            {
                IDUsuario = 1,
                Nombre = "John",
                PrimerApellido = "Doe",
                SegundoApellido = "Smith",
                FechaNacimiento = new DateTime(1990, 5, 15),
                NombreUsuario = "john.doe",
                Contraseña = "password123",
                Habilitado = true
            },
            new Usuario
            {
                IDUsuario = 2,
                Nombre = "Jane",
                PrimerApellido = "Smith",
                SegundoApellido = "Doe",
                FechaNacimiento = new DateTime(1985, 10, 20),
                NombreUsuario = "jane.smith",
                Contraseña = "password456",
                Habilitado = true
            }
        };

        // GET: api/<ValuesController>
        [HttpGet]
        public ActionResult<IEnumerable<Usuario>> Get()
        {
            return _usuarios;
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public ActionResult<Usuario> Get(int id)
        {
            var user = _usuarios.Where(u => u.IDUsuario == id).FirstOrDefault();

            return user;
        }

        // POST api/<ValuesController>
        [HttpPost]
        public ActionResult Post([FromBody] Usuario usuario)
        {
            _usuarios.Add(usuario);

            return Ok();
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] string value)
        {
            return Ok();
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var user = _usuarios.Where(u => u.IDUsuario == id).FirstOrDefault();
            _usuarios.Remove(user);

            return NoContent();
        }
    }
}
