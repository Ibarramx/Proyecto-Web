using API.Comun.Interfaces;
using API.Infraestructura.Modelos;
using Microsoft.AspNetCore.Mvc;
using API.Entidades;

namespace API.Controllers.Roles
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolController : ControllerBase
    {
        private readonly IApliacacionBdContexto _contexto;
        public RolController(IApliacacionBdContexto contexto)
        {
            _contexto = contexto;
        }

        // GET: api/<RolController>
        [HttpGet]
        public IEnumerable<itemRolDto> Get()
        {
            var listaRoles = (from r in _contexto.Rol
                              where r.Habilitado == true
                              select new itemRolDto
                              {
                                  idrol= r.IDRol,
                                  descripcion = r.Descripcion,
                              }).ToArray();

            return listaRoles;
        }

        // GET api/<RolController>/5
        [HttpGet("{id}")]
        public itemRolDto Get(int id)
        {
            var rol = (from r in _contexto.Rol
                       where r.IDRol == id
                       select new itemRolDto
                       {
                           idrol = r.IDRol,
                           descripcion = r.Descripcion
                       }).FirstOrDefault();

            return rol;
        }

        // POST api/<RolController>
        [HttpPost]
        public ActionResult Post([FromBody] itemRolDto nuevoRol)
        {
            if (nuevoRol.idrol > 0)
                return BadRequest();

            var rol = new Rol();
            rol.Descripcion = nuevoRol.descripcion;

            _contexto.Rol.Add(rol);
            _contexto.SaveChanges();

            return Ok();
        }

        // PUT api/<RolController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] itemRolDto rol)
        {
            var rolModificar = _contexto.Rol.Find(id);

            if (rol == null)
                return BadRequest();

            rolModificar.Descripcion = rol.descripcion;
            _contexto.SaveChanges();

            return Ok();
        }

        // DELETE api/<RolController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var rol = _contexto.Rol.Find(id);

            if(rol != null)
                rol.Habilitado = !rol.Habilitado;

            _contexto.SaveChanges();

            return Ok();
        }
    }
}
