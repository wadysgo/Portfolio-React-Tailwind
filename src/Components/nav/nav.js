import '../../index.css'

export function Nav() {
    return (
        <>
            <header>
                <nav className='w-full h-16 flex justify-center items-center
                sm:w-full sm:h-96 sm:flex sm:justify-center sm:items-center
                md:w-full
                lg:w-full lg:h-20 lg:flex lg:justify-center lg:items-center
                xl:w-full xl:h-16 xl:flex xl:justify-center xl:items-center
                '>
                    <ul className='sm:w-full 
                    lg:w-full lg:text-center
                    '>
                        <li className='text-white text-sm
                        sm:flex sm:justify-center sm:items-center sm:flex-col sm:w-full sm:h-60 sm:text-center
                        lg:inline 
                        xl:text-white xl:text-base

                        '>
                            <a href='#inicio' className='m-14 sombraTexto
                            sm:m-4 sm:mt-10 sm:bg-orange-500 sm:w-5/6 sm:pt-2 sm:pb-2 sm:rounded-full
                            lg:bg-transparent lg:mr-16 lg:ml-16
                            '>Inicio</a>
                            
                            <a href='#sobremi' className='m-14 sombraTexto
                            sm:m-4 sm:bg-orange-500 sm:w-5/6 sm:pt-2 sm:pb-2 sm:rounded-full
                            lg:bg-transparent lg:mr-16 lg:ml-16
                            '>Sobre Mi</a>

                            <a href='#tecnologias' className='m-14 sombraTexto
                            sm:m-4 sm:bg-orange-500 sm:w-5/6 sm:pt-2 sm:pb-2 sm:rounded-full 
                            lg:bg-transparent lg:mr-16 lg:ml-16
                            '>Tecnologias</a>

                            <a href='#estudios' className='m-14 sombraTexto
                            sm:m-4 sm:bg-orange-500 sm:w-5/6 sm:pt-2 sm:pb-2 sm:rounded-full 
                            lg:bg-transparent lg:mr-16 lg:ml-16
                            '>Estudios</a>

                            <a href='#contacto' className='m-14 sombraTexto
                            sm:m-4 sm:bg-orange-500 sm:w-5/6 sm:pt-2 sm:pb-2 sm:rounded-full 
                            lg:bg-transparent lg:mr-16 lg:ml-16
                            '>Contacto</a>

                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}