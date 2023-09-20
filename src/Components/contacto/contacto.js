import { type } from '@testing-library/user-event/dist/type';
import '../../index.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contacto() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mq3sp3h', 'template_uivpq2c', form.current, 'N4ObmLcyeKEP-ybQl')
            .then((result) => {
                console.log(result.text);
                alert("¡Enviado Correctamente!.");
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <section id='contacto' className='w-full h-screen flex justify-center items-center'>
                <div className='w-11/12 h-5/6 flex justify-center items-center shadow-2xl rounded-3xl backdrop-blur-sm sombraImagen
                md:w-10/12
                '>
                    <div className="w-2/4 h-5/6 grid place-items-center
                    cl:h-full cl:text-center
                    sm:h-full
                    ">
                        <h2 className='text-3xl font-bold sombraTexto text-red-600
                        cl:text-xl
                        xl:text-5xl
                        '>Contacto</h2>
                        <form ref={form} onSubmit={sendEmail} className='w-full flex justify-center items-center flex-col'>
                            <div className='
                            cl:items-center cl:w-full
                            flex justify-center items-start flex-col w-4/5 mt-5 mb-5'>
                                <label for="txtNombreCompleto" className='text-white
                                cl:text-xs
                                xl:text-2xl
                                '>Nombre Completo</label>
                                <input type='text' className='text-white w-full border-0 bg-transparent border-b-2 border-solid border-white focus:border-white' name='user_name' required></input>
                            </div>
                            <div className='
                             cl:items-center cl:w-full
                            flex justify-center items-start flex-col w-4/5 mt-5 mb-5'>
                                <label for="txtCorreo" className='text-white
                                 cl:text-xs
                                xl:text-2xl
                                '>Correo Electronico</label>
                                <input type='email' className='text-white w-full border-0 bg-transparent border-b-2 border-solid border-white focus:border-white' name='user_email' required></input>
                            </div>
                            <div className='
                             cl:items-center cl:w-full
                            flex justify-center items-start flex-col w-4/5 mt-5 mb-5'>
                                <label for="txtMensaje" className='text-white
                                 cl:text-xs
                                xl:text-2xl
                                '>Mensaje</label>
                                <textarea name='message' required className='text-white resize-none w-full border-0 bg-transparent border-b-2 border-solid border-white focus:border-white'></textarea>
                            </div>
                            <div className='mt-5 mb-5
                            sm:mt-2 sm:mb-2
                            '>
                                <input type='submit' value="Enviar" id="button" className='cursor-pointer sombraImagen w-28 h-10 bg-orange-500 rounded-full text-white
                                sm:w-28
                                '></input>
                            </div>
                        </form>
                    </div>
                    <div className="w-2/4 h-5/6 flex justify-center items-start flex-col
                    cl:hidden
                    sm:h-full sm:items-start
                    ">
                        <h2 className='font-bold text-5xl text-orange-500 sombraTexto
                        sm:text-2xl
                        xl:text-5xl
                        '>¡Gracias por visitar mi sitio web!.</h2>
                        <p className='mt-5 font-normal text-xl sombraTexto text-white
                        sm:font-extralight sm:text-lg sm:mt-2
                        xl:text-xl
                        '>Si tienes dudas no dudes en contactarme por mi sitio web o por mis redes sociales,
                            estoy disponible a cualquier tipo de propuesta y/o preguntas.</p>
                        <div className='mt-10 sombraTexto
                        sm:mt-5 
                        '>
                            <a href='https://wa.link/y6h7yg' className='text-3xl text-orange-500
                            sm:text-xl sm:mr-5
                            md:text-3xl
                            xl:text-5xl
                            '><i class="fa-brands fa-whatsapp"></i></a>
                            <a href='www.linkedin.com/in/diego-benjamin-vallory-52b793263

' className='text-3xl ml-20 text-orange-500
                            sm:text-xl sm:m-5
                            md:text-3xl
                            xl:text-5xl xl:ml-10
                            '><i class="fa-brands fa-linkedin"></i></a>
                            <a href='https://github.com/iBxnja
' className='text-3xl ml-20 text-orange-500
                            sm:text-xl sm:m-5
                            md:text-3xl
                            xl:text-5xl xl:ml-10
                            '><i class="fa-brands fa-github"></i></a>
                            <a href='https://www.outlook.com/?refd=account.microsoft.com&fref=home.banner.viewinbox' className='text-3xl ml-20 text-orange-500
                            sm:text-xl sm:m-5
                            md:text-3xl
                            xl:text-5xl xl:ml-10
                            '><i class="fa-solid fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}