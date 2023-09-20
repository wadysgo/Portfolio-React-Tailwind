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
                cl:w-full cl:h-96 cl:flex cl:justify-center cl:items-center
                '>
                    <ul className='sm:w-full 
                    cl:w-full cl:h-full
                   
                    '>
                        <li className='text-white text-smcl:
                        
                        cl:flex cl:justify-center cl:items-center cl:flex-col cl:h-screen cl:text-center cl:w-full
                        sm:flex sm:justify-center sm:items-center sm:flex-col sm:h-60 sm:text-center
                        lg:flex-row lg:h-full lg:flex lg:justify-center lg:items-center
                        xl:text-white xl:text-base

                        '>
                            <a href='#inicio' className='m-5 sombraTexto
                            cl:w-72 cl:m-2 cl:mb-5 cl:bg-orange-500 cl:pt-2 cl:pb-2 cl:rounded-full cl:pl-28 cl:pr-28
                            sm:m-4 sm:mt-10 sm:bg-orange-500 sm:w-5/6 sm:pt-2 sm:pb-2 sm:rounded-full
                            lg:bg-transparent lg:mr-0 lg:ml-0 lg:text-sm lg:p-2 lg:m-0
                            '>Inicio</a>
                            
                            <a href='#sobremi' className='m-5 sombraTexto
                            cl:w-72 cl:m-2 cl:mt-5 cl:mb-5 cl:bg-orange-500 cl:pt-2 cl:pb-2 cl:rounded-full cl:pl-28 cl:pr-28
                            sm:m-4 sm:bg-orange-500 sm:w-5/6 sm:pt-2 sm:pb-2 sm:rounded-full
                            lg:bg-transparent lg:mr-0 lg:ml-0 lg:text-sm lg:p-2
                            '>Sobre Mi</a>

                            <a href='#tecnologias' className='m-5 sombraTexto
                            cl:w-72 cl:m-2 cl:mt-5 cl:mb-5 cl:bg-orange-500 cl:pt-2 cl:pb-2 cl:rounded-full cl:pl-28 cl:pr-28
                            sm:m-4 sm:bg-orange-500 sm:w-5/6 sm:pt-2 sm:pb-2 sm:rounded-full 
                            lg:bg-transparent lg:mr-0 lg:ml-0 lg:text-sm lg:p-2
                            '>Tecnologias</a>

                            <a href='#estudios' className='m-5 sombraTexto
                            cl:w-72 cl:m-2 cl:mt-5 cl:mb-5 cl:bg-orange-500 cl:pt-2 cl:pb-2 cl:rounded-full cl:pl-28 cl:pr-28
                            sm:m-4 sm:bg-orange-500 sm:w-5/6 sm:pt-2 sm:pb-2 sm:rounded-full 
                            lg:bg-transparent lg:mr-0 lg:ml-0 lg:text-sm lg:p-2
                            '>Estudios</a>

                            <a href='#contacto' className='m-5 sombraTexto
                            cl:w-72 cl:m-2 cl:mt-5 cl:mb-5 cl:bg-orange-500 cl:pt-2 cl:pb-2 cl:rounded-full cl:pl-28 cl:pr-28
                            sm:m-4 sm:bg-orange-500 sm:w-5/6 sm:pt-2 sm:pb-2 sm:rounded-full 
                            lg:bg-transparent lg:mr-0 lg:ml-0 lg:text-sm lg:p-2
                            '>Contacto</a>

                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}