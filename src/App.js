import { Nav } from './Components/nav/nav';
import  {Inicio}  from './Components/inicio/inicio'
import {Sobremi} from './Components/sobremi/sobremi'
import {Tecnologias} from './Components/tecnologias/tecnologias'
import { Estudios } from './Components/estudios/estudios';
import { Contacto } from './Components/contacto/contacto';
import { Footer } from './Components/footer/footer';

import $ from 'jquery';

export function App(){
    return(
        <>  
            <Nav />
            <Inicio />
            <Sobremi />
            <Tecnologias />
            <Estudios />
            <Contacto />
            <Footer />
        </>
    )
}