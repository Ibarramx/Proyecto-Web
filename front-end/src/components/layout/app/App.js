import React from 'react';
import Routes from '../../../route/index';

function App( props ) {
  const route = Routes.find((route) => route.path === props.path);
 
  const ComponentToRender = route.component;
  return (    
  console.log(route)
        // <ComponentToRender />
    // <div id='app' className='app app-content-full-height app-footer-fixed'>
    //   {/* <SideBar />   Componente SideBar     */}
    //   <div id='content' className='app-content'>
    //     {/* <Header />Componente Header */}
    //     <section className='py-3'>
    //     <nav aria-label="breadcrumb">
    //       <ol className="breadcrumb">
    //         <li className="breadcrumb-item"><a href="/">Pagina prueba</a></li>
    //       </ol>
    //     </nav>
    //     </section>
    //   </div>
    //   {/* <CargandoIndicador/>   componente cargando */}
    // </div>
  );
}

export default App;
