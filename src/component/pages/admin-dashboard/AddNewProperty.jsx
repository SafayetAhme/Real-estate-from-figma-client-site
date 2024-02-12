import React from 'react'


const AddNewProperty = () => {
    return (
        <div className='container mx-auto pt-12'>
            <div className='bg-white p-10 rounded-2xl '>
                <h1 className='font-poppins text-xl font-semibold'>Overview</h1>
                <form class="">
                    <div className='grid lg:grid-cols-2 pt-4 gap-6'>
                        <div class="my-2">
                            <label for="name" name="name" class="block mb-2 text-sm text-gray-900 dark:text-white font-semibold">First Name*</label>
                            <input type="name" name="name" id="name" class=" border w-full border-gray-300 px-3 py-2 rounded-lg" placeholder="name" required />
                        </div>
                        <div class="my-2">
                            <label for="name" name="name" class="block mb-2 text-sm text-gray-900 dark:text-white font-semibold">Last Name*</label>
                            <input type="name" name="name" id="name" class=" border w-full border-gray-300 px-3 py-2 rounded-lg" placeholder="name" required />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <div class="my-2">
                            <label for="email" class="block mb-2 text-sm text-gray-900 dark:text-white font-semibold">Email**</label>
                            <input type="email" id="email" name='email' class=" border w-full border-gray-300 px-3 py-2 rounded-lg" placeholder="email" required />
                        </div>
                        <div class="my-2">
                            <label for="name" name='name' class="block mb-2 text-sm text-gray-900 dark:text-white font-semibold">Position*</label>
                            <input type="name" name='name' id="name" class=" border w-full border-gray-300 px-3 py-2 rounded-lg" placeholder="Position" required />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <div class="my-2">
                            <label for="number" class="block mb-2 text-sm text-gray-900 dark:text-white font-semibold">Phone Number*</label>
                            <input type="number" id="number" name='number' class=" border w-full border-gray-300 px-3 py-2 rounded-lg" placeholder="number" required />
                        </div>
                        <div class="my-2">
                            <label for="link" class="block mb-2 text-sm text-gray-900 dark:text-white font-semibold">Website*</label>
                            <input type="link" id="link" name='link' class=" border w-full border-gray-300 px-3 py-2 rounded-lg" placeholder="Website" required />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-1 gap-6'>
                        <div class="my-2">
                            <label for="text" class="block mb-2 text-sm text-gray-900 dark:text-white font-semibold">About me*</label>
                            <textarea placeholder="Bio" className="border rounded-lg textarea-sm pb-10 w-full" ></textarea>
                            <p className='text-gray-400 text-sm'>Brief description for your profile. URLs are hyperlinked.</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddNewProperty