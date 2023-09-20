import '../../index.css'


export function Inicio() {
    return <>

        <section id='inicio' className='w-full flex justify-center items-center
        sm:w-full sm:h-screen
        md:w-full md:h-screen
        xl:w-full xl:flex xl:justify-center xl:items-center xl:h-full
        '>
            <div className='w-11/12 flex justify-center items-center
            sm:w-full sm:h-screen sm:flex-col
            xl:w-11/12 xl:m-0 xl:p-0 xl:h-full xl:flex-row
            '>

                <div className='inicio-info flex justify-center items-start flex-col text-white w-2/4
                sm:items-center sm:text-center
                xl:inicio-info xl:flex xl:justify-center xl:items-center xl:flex-col xl:text-white xl:w-3/4 xl:full
                '

                >
                    <h4 className='text-3xl m-3 sombraTexto
                    sm:text-xl sm:m-0 sm:font-light
                    md:text-2xl
                    xl:text-3xl
                    '>Bienvenido, soy</h4>

                    <h2 className='text-7xl m-2 sombraTexto
                    sm:text-5xl
                    md:text-5xl
                    xl:text-6xl
                    '>Benjamin Vallory</h2>

                    <h6 className='text-xl m-3 font-extralight sombraTexto
                    sm:text-lg
                    xl:text-xl
                    '>Programador Full Stack Junior</h6>


                    <a href="/multimedia/Cv.jpg" download="Cv.jpg" className='ml-2
                    sm:m-0
                    '>
                        <button className='mt-5 w-32 h-10 bg-red-600 rounded-full sombraImagen
                        sm:mt-1 sm:mb-5
                        xl:mt-5 xl:w-32 xl:h-10
                        '>Descargar Cv</button>
                    </a>

                </div>
                <div className='inicio-extra w-1/3 flex justify-center items-center flex-col text-white text-center
                sm:flex-column
                md:w-2/3
                xl:flex-row xl:m-0 xl:inicio-extra xl:w-11/12 xl:flex xl:justify-center xl:items-center xl:flex-col xl:text-white xl:text-center
                '>

                    <h4 className='text-sm font-medium text-orange-500 pl-14 sombraTexto
                    sm:text-sm sm:p-0
                    md:text-base
                    xl:p-0 
                    '>- - - - - - - - Sitio Web - - - - - - - -</h4>

                    <h6 className='font-extralight text-lg pl-14 sombraTexto
                    sm:p-0
                    '>Bienvenido a mi Sitio Web,<br />
                        aquí podras encontrar todo<br />
                        sobre mi, habilidades, estu-<br />
                        dios, contacto, etc.<br /></h6>

                    <h6 className='sombraTexto text-orange-500 font-extralight text-lg pl-14
                    sm:p-0 sm:text-sm
                    md:text-lg
                    '>- - ¡Gracias por visitarme!. - -</h6>

                </div>
            </div>
        </section>
    </>
}