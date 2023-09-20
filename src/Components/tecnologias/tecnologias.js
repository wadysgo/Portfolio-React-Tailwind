import '../../index.css';

export function Tecnologias() {

  return (
    <section id='tecnologias' className='w-full h-screen flex justify-center items-center flex-col
    sm:h-screen sm:mt-20 sm:mb-20
    '>
      <div id="lenguajes" className='w-9/12 flex justify-center items-start flex-col
      sm:h-full sm:items-center
      '>
        <h2 className='text-white text-2xl font-light sombraTexto
        
xl:text-3xl

        
        '>Lenguajes De Programacion</h2>
        <span className='pb-2 border-b border-white w-full'></span>
        <div className='mt-5 flex justify-center items-center text-center'>
          <img src='/multimedia/html.png' className='w-14
          sm:w-10
          md:w-12
          xl:w-20
          '></img>
          <img src='/multimedia/css.png' className='w-14 ml-20
            sm:w-10
            md:w-12
            xl:w-20
          '></img>
          <img src='/multimedia/javascript.png' className='w-14 ml-20
            sm:w-10 ml-14
            md:w-12
            xl:w-20
          '></img>
          <img src='/multimedia/php.png' className='w-14 ml-20
            sm:w-10 ml-14
            md:w-12
            xl:w-20
          '></img>
          <img src='/multimedia/phppoo.png' className='w-14 ml-20
            sm:w-10 ml-14
            md:w-12
            xl:w-20
          '></img>
        </div>
      </div>
      <div id="Librerias" className='mt-10 w-9/12 flex justify-center items-start flex-col
      sm:h-full sm:items-center
      '>
        <h2 className='text-white text-2xl font-light sombraTexto
        xl:text-3xl
        '>Frameworks y Librerias</h2>
        <span className='pb-2 border-b border-white w-full'></span>
        <div className='mt-5 flex justify-center items-center'>
          <img src='/multimedia/laravel.png' className='w-14
          sm:w-10
          md:w-12
          xl:w-20
          '></img>
          <img src='/multimedia/jquery.png' className='w-14 ml-20
          sm:w-10 ml-14
          md:w-12
          xl:w-20
          '></img>
          <img src='/multimedia/ajax.png' className='w-14 ml-20
          sm:w-10 ml-14
          md:w-12
          xl:w-20
          '></img>
          <img src='/multimedia/bootstrap.png' className='w-14 ml-20
          sm:w-10 ml-14
          md:w-12
          xl:w-20
          '></img>
          <img src='/multimedia/react.png' className='w-14 ml-20
          sm:w-10 ml-14
          md:w-12
          xl:w-20
          '></img>
        </div>
      </div>
      <div id="herramientas" className='mt-10 w-9/12 flex justify-center items-start flex-col
      sm:h-full sm:items-center sm:text-center
      '>
        <h2 className='text-white text-2xl font-light sombraTexto
        xl:text-3xl
        '>Herramientas de diseño, control de versiones y gestion de datos</h2>
        <span className='pb-2 border-b border-white w-full'></span>
        <div className='mt-5 flex justify-center items-center'>
          <img src='/multimedia/git.png' className='w-14
          sm:w-10
          md:w-12
          xl:w-20
          '></img>
          <img src='/multimedia/github.png' className='w-14 ml-20
          sm:w-10 ml-14
          md:w-12
          xl:w-20
          '></img>
          <img src='/multimedia/dbeaver.png' className='w-14 ml-20
          sm:w-10 ml-14
          md:w-12
          xl:w-20
          '></img>
          <img src='/multimedia/figma.png' className='w-14 ml-20
          sm:w-10 ml-14
          md:w-12
          xl:w-20
          '></img>
          <img src='/multimedia/illustrator.png' className='w-14 ml-20
          sm:w-10 ml-14
          md:w-12
          xl:w-20
          '></img>
        </div>
      </div>
    </section>
  );
}
