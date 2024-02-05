import React from 'react'

const MenuLocationSection = () => {
    return (
        <div>
            <h1 className='font-poppins pt-10 text-2xl font-semibold'>Location</h1>
            <div class="relative w-full rounded-xl shadow-lg bg-white mt-0 h-[460px]">
                <iframe class="absolute rounded-3xl p-4 top-0 left-0 w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                    frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
                </iframe>
            </div>
        </div>
    )
}

export default MenuLocationSection