import Inicio from "../components/pages/Inicio";
import Usuarios from "../components/pages/users";

const Routes = [
    {
        path: '/',
        component: Inicio,
    },
    {
        path: 'Usuarios',
        component: Usuarios
    }
];
export default Routes;