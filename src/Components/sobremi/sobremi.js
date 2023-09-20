import '../../index.css'

export function Sobremi() {
    return (
        <section id='sobremi' className='w-full h-screen  flex justify-center items-center
        
        '>
            <div className='w-9/12 flex items-center justify-center
            cl:flex-col cl:w-full
            sm:flex-col sm:w-full
            xl:flex-row
            xl:w-9/12 xl:flex xl:items-center xl:justify-center
            '>
                <div id="sobremi-extra" className='w-2/5 flex justify-center items-center
                cl:w-full
                sm:w-full
                '>
                    <img src="multimedia/fondo1.jpg" className='w-96 h-96 border border-solid border-red-800 border-8 sombraImagen
                    cl:w-28 cl:h-28 cl:border-2 cl:mb-10
                    sm:w-48 sm:h-48 sm:border-2 sm:mb-10 
                    md:w-56 md:h-56
                    xl:w-96 xl:h-96
                    '></img>
                </div>
                <div id="sobremi-info" className="w-10/12 flex justify-center items-start flex-col ml-20 text-white
                cl:m-0 cl:items-center cl:text-center
                sm:m-0 sm:items-center sm:text-center
                xl:w-10/12
                ">
                    <h2 className='text-3xl font-bold mb-1 text-red-600 sombraTexto
                    xl:text-4xl
                    '>Sobre Mí</h2>
                    <p className='font-extralight text-lg mt-1 sombraTexto
                    cl:text-sm
                    sm:text-base
                    xl:text-lg xl:font-base
                    '>Soy un apasionado <strong>Programador Web</strong>, me gusta estar en constante
                        aprendizaje; por eso, ocupo mis tiempos libres para estudiar
                        <strong>lenguajes</strong>, <strong>frameworks</strong>, <strong>librerías</strong>, <strong>técnicas</strong> y nuevas <strong>herramientas</strong>
                        para mejorar mi <strong>experiencia</strong> y desempeño <strong>laboral</strong>. Mis <strong>metas</strong> y mis <strong>visiones</strong>
                        a futuro son poder <strong>trabajar</strong> de lo que me apasiona y <strong>mejorar</strong> día a día
                        en esto mismo. Disfruto trabajar de forma <strong>colectiva</strong>, poder <strong>debatir</strong>,
                        <strong>proponer</strong> ideas nuevas, <strong>resolver</strong> problemas que se presenten y
                        tener los mejores <strong>resultados</strong> tanto para mi como para mis <strong>compañeros</strong> de trabajo.
                    </p>
                    <div className='mt-7
                    cl:mt-2
                    sm:mt-5
                    xl:mt-10
                    '>
                        <a href='https://wa.link/y6h7yg' className='sombraTexto text-3xl text-orange-500
                        cl:m-6
                        cl:text-xl
                        sm:text-4xl
                        md:text-5xl
                        '><i class="fa-brands fa-whatsapp"></i></a>
                        <a href='www.linkedin.com/in/diego-benjamin-vallory-52b793263' className='sombraTexto text-3xl ml-20 text-orange-500
                        cl:m-6
                        cl:text-xl                        
                        sm:text-4xl
                        md:text-5xl
                        '><i class="fa-brands fa-linkedin"></i></a>
                        <a href='https://github.com/iBxnja' className='sombraTexto text-3xl ml-20 text-orange-500
                        cl:m-6
                        cl:text-xl
                        sm:text-4xl
                        md:text-5xl
                        '><i class="fa-brands fa-github"></i></a>
                        <a href='https://www.outlook.com/?refd=account.microsoft.com&fref=home.banner.viewinbox
                        ' className='sombraTexto text-3xl ml-20 text-orange-500
                        cl:m-6
                        cl:text-xl                        
                        sm:text-4xl
                        md:text-5xl
                        '><i class="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
            </div>

        </section>
    )
}