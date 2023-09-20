import '../../index.css';

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
          <img src='assets/html.png' className='w-14
          cl:w-6
          sm:w-10
          md:w-12
          xl:w-20
          ' />
          <img src='assets/css.png' className='w-14 ml-20
            cl:w-6 cl:ml-0
            sm:w-10
            md:w-12
            xl:w-20
          '></img>
          <img src='/assets/javascript.png' className='w-14 ml-20
            cl:w-6 cl:ml-0
            sm:w-10 ml-14
            md:w-12
            xl:w-20
          '></img>
          <img src='/assets/php.png' className='w-14 ml-20
            cl:w-6 cl:ml-0
            sm:w-10 ml-14
            md:w-12
            xl:w-20
          '></img>
          <img src='/assets/phppoo.png' className='w-14 ml-20
            cl:w-6 cl:ml-0
            sm:w-10 ml-14
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
          <img src='/assets/laravel.png' className='w-14
          cl:w-6
          sm:w-10
          md:w-12
          xl:w-20
          '></img>
          <img src='/assets/jquery.png' className='w-14 ml-20
          cl:w-6 cl:ml-0
          sm:w-10 ml-14
          md:w-12
          xl:w-20
          '></img>
          <img src='/assets/ajax.png' className='w-14 ml-20
          cl:w-6 cl:ml-0
          sm:w-10 ml-14
          md:w-12
          xl:w-20
          '></img>
          <img src='/assets/bootstrap.png' className='w-14 ml-20
          cl:w-6 cl:ml-0
          sm:w-10 ml-14
          md:w-12
          xl:w-20
          '></img>
          <img src='/assets/react.png' className='w-14 ml-20
          cl:w-6 cl:ml-0
          sm:w-10 ml-14
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
          <img src='/assets/git.png' className='w-14
          cl:w-6
          sm:w-10
          md:w-12
          xl:w-20
          '></img>
          <img src='/assets/github.png' className='w-14 ml-20
          cl:w-6 cl:ml-0
          sm:w-10 ml-14
          md:w-12
          xl:w-20
          '></img>
          <img src='/assets/dbeaver.png' className='w-14 ml-20
          cl:w-6 cl:ml-0
          sm:w-10 ml-14
          md:w-12
          xl:w-20
          '></img>
          <img src='/assets/figma.png' className='w-14 ml-20
          cl:w-6 cl:ml-0
          sm:w-10 ml-14
          md:w-12
          xl:w-20
          '></img>
          <img src='/assets/illustrator.png' className='w-14 ml-20
          cl:w-6 cl:ml-0
          sm:w-10 ml-14
          md:w-12
          xl:w-20
          '></img>
        </div>
      </div>
    </section>
  );
}
