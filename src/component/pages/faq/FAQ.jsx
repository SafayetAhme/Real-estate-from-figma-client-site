import React, { useState } from 'react'
import FaqHero from './FaqHero'
import probg from '../../../../public/image/probg.png'
// import FaqText from './FaqText';
// import Accordion from "./Accordion";
import FaqText from './FaqText';
import StyJurny from '../../shared/start your jurny/StyJurny';


const FAQ = () => {
    

    return (
        <div>
            {/* Faq hero section */}
            <FaqHero></FaqHero>

            {/* main section */}
            <div className="grid lg:grid-cols-3 pt-10 container mx-auto">
                <div className='col-span-1 pr-14 h-fit p-4'>
                    <div className='p-5' style={{ backgroundImage: `url(${probg})` }}>
                        {/* category */}
                        <div className='p-4 bg-white rounded-xl'>
                            <p className='text-lg pb-2 font-poppins hover:underline'><span>1.</span> Selling</p>
                            <p className='text-lg pb-2 font-poppins hover:underline'><span>2.</span> Renting</p>
                            <p className='text-lg pb-2 font-poppins hover:underline'><span>3.</span> Buying</p>
                            <p className='text-lg pb-2 font-poppins hover:underline'><span>4.</span> Payments</p>
                            <p className='text-lg pb-2 font-poppins hover:underline'><span>5.</span> Terms & Conditions</p>
                            <p className='text-lg pb-2 font-poppins hover:underline'><span>6.</span> Account</p>
                        </div>

                        {/* Keywords */}
                        <div className='p-6 bg-white rounded-xl text-center mt-4'>
                            <h1 className='font-poppins text-2xl text-center font-semibold'>Don’t Find Your <br /> Answer?</h1>
                            <button className='px-6 py-2 border-[2px] rounded-lg text-white bg-black hover:text-white font-poppins border-black mt-3'>Contact us</button>
                        </div>
                    </div>
                </div>

                {/* col-span-2 */}
                <div className='pt-4 col-span-2 gap-5'>
                    {/* SELLING */}
                    <div>
                        <h1 className='font-poppins text-gray-400'>SELLING</h1>
                        <hr className='mt-4' />
                        <div className="py-2">
                            <FaqText
                                title="How does the free trial work?"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            />
                            <hr className='pb-1' />
                            <FaqText
                                title="How do you weigh different criteria in your process?"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            />
                            <hr className='pb-1' />
                            <FaqText title="What’s the process of selling property?"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            />
                            <hr className='pb-1' />
                            <FaqText title="Refund & Frauds"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            />
                            <hr className='pb-1' />
                        </div>
                    </div>

                    {/* RENTING */}
                    <div className='pt-12'>
                        <h1 className='font-poppins text-gray-400'>RENTING</h1>
                        <hr className='mt-4' />
                        <div className="py-2">
                            <FaqText
                                title="Can a home depreciate in value?"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            />
                            <hr className='pb-1' />
                            <FaqText
                                title="Is an older home as good a value as a new home?"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            />
                            <hr className='pb-1' />
                            <FaqText title="What is a broker?"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            />
                            <hr className='pb-1' />
                            <FaqText title="Can I pay my own taxes and insurance?"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            />
                            <hr className='pb-1' />
                        </div>
                    </div>

                    {/* Buying */}
                    <div className='pt-12'>
                        <h1 className='font-poppins text-gray-400'>BUYING</h1>
                        <hr className='mt-4' />
                        <div className="py-2">
                            <FaqText
                                title="How does the free trial work?"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            />
                            <hr className='pb-1' />
                            <FaqText
                                title="How do you weigh different criteria in your process?"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            />
                            <hr className='pb-1' />
                            <FaqText title="Refund & Frauds"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            />
                            <hr className='pb-1' />
                        </div>
                    </div>

                    {/* Payments */}
                    <div className='pt-12'>
                        <h1 className='font-poppins text-gray-400'>PAYMENTS</h1>
                        <hr className='mt-4' />
                        <div className="py-2">
                            <FaqText
                                title="Whic payment method is supported?"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            />
                            <hr className='pb-1' />
                            <FaqText
                                title="Is my card is secure here?"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            />
                            <hr className='pb-1' />
                            <FaqText title="Can I provide cheque to my client for payment?"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            />
                            <hr className='pb-1' />
                        </div>
                    </div>

                    {/* Terms & Conditions */}
                    <div className='pt-12'>
                        <h1 className='font-poppins text-gray-400'>TERMS & CONDITIONS</h1>
                        <hr className='mt-4' />
                        <div className="py-2">
                            <FaqText
                                title="How does the free trial work?"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            />
                            <hr className='pb-1' />
                            <FaqText
                                title="How do you weigh different criteria in your process?"
                                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat veniam voluptate fugit, ad eos officia quia deleniti qui excepturi id, omnis quas blanditiis hic, ratione velit reprehenderit. Sapiente quasi expedita voluptatum debitis necessitatibus? Explicabo molestiae velit quas a debitis."
                            />
                            <hr className='pb-1' />
                        </div>
                    </div>
                </div>
            </div>

            {/* start your journey section */}
            <StyJurny></StyJurny>
        </div>
    )
}

export default FAQ