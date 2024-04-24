using API.Infraestructura.Modelos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.Kestrel.Core.Internal.Http;

namespace API.Controllers.Usuarios
{
    [Route("[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private dataUsuarios semilla = new dataUsuarios();
        
        [HttpGet]
        public ActionResult<IEnumerable<Usuario>> Get()
        {
            return semilla._usuarios;
        }

        [HttpGet("{id}")]
        public ActionResult<Usuario> Get(int id)
        {
            var user = semilla._usuarios.Where(u => u.IDUsuario == id).FirstOrDefault();

            return user;
        }

        [HttpPost]
        public ActionResult Post([FromBody] Usuario usuario)
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
