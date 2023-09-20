import '../../index.css';

export function Estudios() {
    return (
        <section id='estudios' className=' flex justify-center items-center flex-col w-full h-screen'>
            <div className='w-9/12 h-40 bg-slate-200 m-3 flex justify-start items-center'>
                <i className="cl:text-4xl fa-solid fa-graduation-cap text-9xl mr-10 ml-10"></i>
                <div className='flex justify-center items-start flex-col'>
                    <h2 className='cl:text-base text-3xl font-bold mb-1 text-orange-500 sombraTexto'>UTN - Concordia</h2>
                    <h6 className='cl:text-base font-normal text-2xl mb-1 text-red-600'>Desarrollo Web Responsive</h6>
                    <h4 className='cl:text-xs font-extralight text-lg mb-1'>Periodo 2023-2024</h4>
                </div>
            </div>
            <div className='w-9/12 h-40 bg-slate-200 m-3 flex justify-start items-center'>
                <i className="cl:text-4xl fa-solid fa-graduation-cap text-9xl mr-10 ml-10"></i>
                <div className='flex justify-center items-start flex-col'>
                    <h2 className='cl:text-base text-3xl font-bold mb-1 text-orange-500 sombraTexto'>Depc Suite</h2>
                    <h6 className='cl:text-base font-normal text-2xl mb-1 text-red-600'>Programacion Web Full Stack</h6>
                    <h4 className='cl:text-xs font-extralight text-lg mb-1'>Periodo 2023-2024</h4>
                </div>
            </div>
            <div className='w-9/12 h-40 bg-slate-200 m-3 flex justify-start items-center'>
                <i className="cl:text-4xl fa-solid fa-graduation-cap text-9xl mr-10 ml-10"></i>
                <div className='flex justify-center items-start flex-col'>
                    <h2 className='cl:text-base text-3xl font-bold mb-1 text-orange-500 sombraTexto'>Depc Suite</h2>
                    <h6 className='cl:text-base font-normal text-2xl mb-1 text-red-600'>Programacion Python <strong className='font-extralight text-black'>(En Curso)</strong></h6>
                    <h4 className='cl:text-xs font-extralight text-lg mb-1'>Periodo 2023-2024</h4>
                </div>
            </div>
        </section>
    )
}