import '../../index.css';

export function Footer() {
    return (
        <>
            <footer className='w-full h-60 backdrop-blur-sm sombraImagen flex justify-center items-center'>
                <div className='
                cl:w-full cl:items-center cl:text-center
                w-5/12 flex justify-center items-start flex-col'>
                    <h2 className='text-2xl font-bold text-red-600 mb-2'>Contactos Directos</h2>
                    <span className='text-lg text-white font-extralight'>E-Mail: Benjavallory@hotmail.com</span>
                    <span className='text-lg text-white font-extralight'>Linkedin: Diego Benjamin Vallory</span>
                    <span className='text-lg text-white font-extralight'>Github: iBxnja</span>
                    <div className='mt-5'>
                        <a href='https://wa.link/y6h7yg' className='text-3xl text-orange-500
                        cl:text-lg
                        sm:text-xl 
                        md:text-3xl
                        '><i class="fa-brands fa-whatsapp"></i></a>
                        <a href='www.linkedin.com/in/diego-benjamin-vallory-52b793263' className='text-3xl ml-20 text-orange-500
                        cl:text-lg cl:ml-12
                        sm:text-xl sm:ml-10
                        md:text-3xl
                        '><i class="fa-brands fa-linkedin"></i></a>
                        <a href='https://github.com/iBxnja' className='text-3xl ml-20 text-orange-500
                        cl:text-lg cl:ml-12
                        sm:text-xl sm:ml-10
                        md:text-3xl
                        '><i class="fa-brands fa-github"></i></a>
                        <a href='https://www.outlook.com/?refd=account.microsoft.com&fref=home.banner.viewinbox' className='text-3xl ml-20 text-orange-500
                        cl:text-lg cl:ml-12
                        sm:text-xl sm:ml-10
                        md:text-3xl
                        '><i className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
                <div className='w-4/12 flex justify-center items-center cl:hidden '>
                    <div>
                        <ul>
                            <li className='text-white text-sm flex justify-center items-center flex-col
                            sm:hidden
                            xl:flex xl:justify-center xl:items-center xl:flex-col
                            '>
                                <a href='#inicio' className='m-2 underline-offset-4  underline'>Inicio</a>
                                <a href='#sobremi' className='m-2 underline-offset-4 underline'>Sobre Mi</a>
                                <a href='#tecnologias' className='m-2 underline-offset-4  underline'>Tecnologias</a>
                                <a href='#estudios' className='m-2 underline-offset-4  underline'>Estudios</a>
                                <a href='#contacto' className='m-2 underline-offset-4  underline'>Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className='
                    cl:hidden
                    flex justify-center items-start flex-col ml-10'>
                        <h4 className='text-lg font-bold text-orange-500
                        sm:m-1
                        xl:text-xl
                        '>Benjamin Vallory</h4>
                        <h4 className='text-sm font-semibold text-white
                        sm:m-1 sm:text-sm sm:font-normal 
                        xl:text-base
                        '>Programador Web Full Stack Junior</h4>
                        <h4 className='text-sm font-extralight text-white
                        sm:m-1 sm:text-lg
                        '>Trabajo En Remoto</h4>
                        <h4 className='text-sm font-extralight text-white
                        sm:m-1 sm:text-lg
                        '>Jornada Completa</h4>
                    </div>
                </div>
            </footer>
        </>
    )
}