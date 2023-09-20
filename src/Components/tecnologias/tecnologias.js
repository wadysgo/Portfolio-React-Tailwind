import '../../index.css';
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import php from '../../assets/php.png'
import phppoo from '../../assets/phppoo.png'
import javascript from '../../assets/javascript.png'
import laravel from '../../assets/laravel.png'
import react from '../../assets/react.png'
import jquery from '../../assets/jQuery.png'
import ajax from '../../assets/ajax.jpg'
import figma from '../../assets/figma.png'
import illustrator from '../../assets/illustrator.png'
import bootstrap from '../../assets/bootstrap.png'
import github from '../../assets/github.png'
import git from '../../assets/Git.png'
import dbeaver from '../../assets/dbeaver.png'
import tailwind from '../../assets/tailwind.png'

export function Tecnologias() {

  return (
    <section id='tecnologias' className='w-full h-screen flex justify-center items-center flex-col
    cl:h-screen cl:w-full
    sm:h-screen sm:mt-20 sm:mb-20
    '>
      <div id="lenguajes" className='w-9/12 flex justify-center items-start flex-col
      cl:items-center cl:text-center
      sm:h-full sm:items-center
      '>
        <h2 className='text-white text-2xl font-light sombraTexto
        cl:text-xl 
        xl:text-3xl
        '>Lenguajes De Programacion</h2>
        <span className='pb-2 border-b border-white w-full'></span>
        <div className='mt-5 flex justify-center items-center text-center'>
          <img src={html} className='w-14
          cl:w-6
          sm:w-10
          md:w-12
          xl:w-20
          ' />
          <img src={css} className='w-14 ml-20
            cl:w-6 cl:ml-5
            sm:w-10 sm:ml-14
            md:w-12
            xl:w-20
          '></img>
          <img src={php} className='w-14 ml-20
            cl:w-6 cl:ml-5
            sm:w-10 sm:ml-14
            md:w-12
            xl:w-20
          '></img>
          <img src={phppoo} className='w-14 ml-20
            cl:w-6 cl:ml-5
            sm:w-10 sm:ml-14
            md:w-12
            xl:w-20
          '></img>
          <img src={javascript} className='w-14 ml-20
            cl:w-6 cl:ml-5
            sm:w-10 sm:ml-14
            md:w-12
            xl:w-20
          '></img>
        </div>
      </div>
      <div id="Librerias" className='mt-10 w-9/12 flex justify-center items-start flex-col
      cl:text-center cl:items-center
      sm:h-full sm:items-center
      '>
        <h2 className='text-white text-2xl font-light sombraTexto
        cl:text-xl
        xl:text-3xl
        '>Frameworks y Librerias</h2>
        <span className='pb-2 border-b border-white w-full'></span>
        <div className='mt-5 flex justify-center items-center'>
          <img src={laravel} className='w-14
          cl:w-6
          sm:w-10
          md:w-12
          xl:w-20
          '></img>
          <img src={jquery} className='w-14 ml-20
            cl:w-6 cl:ml-5
            sm:w-10 sm:ml-14
            md:w-12
            xl:w-20
          '></img>
          <img src={ajax} className='w-14 ml-20
            cl:w-6 cl:ml-5
            sm:w-10 sm:ml-14
            md:w-12
            xl:w-20
          '></img>
          <img src={bootstrap} className='w-14 ml-20
            cl:w-6 cl:ml-5
            sm:w-10 sm:ml-14
            md:w-12
            xl:w-20
          '></img>
          <img src={react} className='w-14 ml-20
            cl:w-6 cl:ml-5
            sm:w-10 sm:ml-14
            md:w-12
            xl:w-20
          '></img>
          <img src={tailwind} className='w-14 ml-20
            cl:w-6 cl:ml-5
            sm:w-10 sm:ml-14
            md:w-12
            xl:w-20
          '></img>
        </div>
      </div>
      <div id="herramientas" className='mt-10 w-9/12 flex justify-center items-start flex-col
      cl:items-center cl:text-center
      sm:h-full sm:items-center sm:text-center
      '>
        <h2 className='text-white text-2xl font-light sombraTexto
        cl:text-xl
        xl:text-3xl
        '>Herramientas de diseño, control de versiones y gestion de datos</h2>
        <span className='pb-2 border-b border-white w-full'></span>
        <div className='mt-5 flex justify-center items-center'>
          <img src={git} className='w-14
          cl:w-6
          sm:w-10
          md:w-12
          xl:w-20
          '></img>
          <img src={github} className='w-14 ml-20
            cl:w-6 cl:ml-5
            sm:w-10 sm:ml-14
            md:w-12
            xl:w-20
          '></img>
          <img src={dbeaver} className='w-14 ml-20
            cl:w-6 cl:ml-5
            sm:w-10 sm:ml-14
            md:w-12
            xl:w-20
          '></img>
          <img src={figma} className='w-14 ml-20
            cl:w-6 cl:ml-5
            sm:w-10 sm:ml-14
            md:w-12
            xl:w-20
          '></img>
          <img src={illustrator} className='w-14 ml-20
            cl:w-6 cl:ml-5
            sm:w-10 sm:ml-14
            md:w-12
            xl:w-20
          '></img>
        </div>
      </div>
    </section>
  );
}
