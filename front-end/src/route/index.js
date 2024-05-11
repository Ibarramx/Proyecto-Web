import Inicio from "../components/pages/Inicio";
import Usuarios from "../components/pages/users";
import Role from "../components/pages/Role";

const Routes = [
    {
        path: '/',
        component: Inicio,
    },
    {
        path: 'Usuarios',
        component: Usuarios
    },
    {
        path: 'Roles',
        component: Role
    }
];
export default Routes;