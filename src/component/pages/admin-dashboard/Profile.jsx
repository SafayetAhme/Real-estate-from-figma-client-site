import React from 'react'

const Profile = () => {
    return (
        <div className='pl-[108px] container mx-auto pr-10 pt-8'>
            <div className='bg-white p-10 rounded-2xl '>
                <div className='flex items-center gap-5'>
                    <img className='w-[50px] h-[50px] rounded-full' src="" alt="" />
                    <label for="uploadFile1" className="border-orange-500 border px-4 py-1 rounded-lg hover:text-white text-orange-500 hover:bg-orange-500 ">
                        Upload new photo
                        <input type="file" id='uploadFile1' class="hidden" />
                    </label>
                    <button className='text-lg'>Delete</button>
                </div>
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

            {/* social media */}
            <div className='bg-white p-10 mt-9 rounded-2xl '>
                <h1 className='text-xl font-semibold font-poppins'>Social Media</h1>
                <form class="">
                    <div className=' pt-2 gap-6'>
                        <div class="my-2">
                            <label for="name" name="name" class="block mb-2 text-sm text-gray-900 dark:text-white font-semibold">Facebook*</label>
                            <input type="name" name="name" id="name" class=" border w-full border-gray-300 px-3 py-2 rounded-lg" placeholder="facebook" required />
                        </div>
                        <div class="my-4">
                            <label for="name" name="name" class="block mb-2 text-sm text-gray-900 dark:text-white font-semibold">Twitter*</label>
                            <input type="name" name="name" id="name" class=" border w-full border-gray-300 px-3 py-2 rounded-lg" placeholder="Twitter" required />
                        </div>
                    </div>
                </form>
            </div>

            {/* social media */}
            <div className='bg-white p-10 mt-9 rounded-2xl '>
                <h1 className='text-xl font-semibold font-poppins'>Address & Location</h1>
                <form class="">
                    <div className=' grid lg:grid-cols-2 items-center gap-6'>
                        <div class="my-2">
                            <label for="location" class="block mb-2 text-sm text-gray-900 dark:text-white font-semibold">Address*</label>
                            <input type="location" name="location" id="location" class=" border w-full border-gray-300 px-3 py-2 rounded-lg" placeholder="Address" required />
                        </div>
                        <div class="my-4">
                            <label for="name" name="name" class="block mb-2 text-sm text-gray-900 dark:text-white font-semibold">Country*</label>
                            <input type="name" name="name" id="name" class=" border w-full border-gray-300 px-3 py-2 rounded-lg" placeholder="Country" required />
                        </div>
                    </div>
                </form>
            </div>

            {/* button save or cancel */}
            <div className='flex py-10 pb-24 items-center gap-4'>
                <button className='bg-orange-500 text-white font-poppins px-12 rounded-lg py-2'>Save</button>
                <button className='border border-gray-400  text-gray-500 px-12 rounded-lg py-2'>calcel</button>
            </div>
        </div>
    )
}

export default Profile