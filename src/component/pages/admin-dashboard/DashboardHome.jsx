import React from 'react'
import user from '../../../../public/image/user.png'
import save from '../../../../public/image/save.png'
import ei from '../../../../public/image/ei.png'
import love from '../../../../public/image/love.png'
import element from '../../../../public/image/element.png'
import UseMenus from '../../hooks/usemenus/UseMenus'
import UseAddtolove from '../../hooks/use add to love/UseAddtolove'
import UseUser from '../../hooks/use user/UseUser'
import UsePayment from '../../hooks/use payment/UsePayment'

const DashboardHome = () => {
    const [menus] = UseMenus([]);
    const [addlove] = UseAddtolove([]);
    const [users] = UseUser([]);
    const [payment] = UsePayment([]);
    const allPrices = payment.map(payment => parseFloat(payment?.price));


    return (
        <div className='pl-[108px] pr-10 pt-8'>
            <div className='bg-white rounded-2xl px-9 py-5 flex  items-center '>
                <div className='flex items-center'>
                    <div>
                        <h1 className='font-poppins text-[#8e8e8e] font-light'>All Properties</h1>
                        <h1 className='font-poppins text-black text-4xl font-semibold pt-1'>{menus?.length}</h1>
                    </div>
                    <img className='w-[75px] mx-8' src={user} alt="" />
                    <img className='w-[30px] mr-4' src={element} alt="" />
                </div>
                <div className='flex items-center'>
                    <div>
                        <h1 className='font-poppins text-[#8e8e8e] font-light'>Total Users</h1>
                        <h1 className='font-poppins text-black text-4xl font-semibold pt-1'>{users?.length}</h1>
                    </div>
                    <img className='w-[75px] mx-8' src={user} alt="" />
                    <img className='w-[30px] mr-4' src={element} alt="" />
                </div>
                <div className='flex items-center'>
                    <div>
                        <h1 className='font-poppins text-[#8e8e8e] font-light'>Total Sell</h1>
                        <h1 className='font-poppins text-black text-4xl font-semibold pt-1'>{allPrices?.length}</h1>
                    </div>
                    <img className='w-[75px] mx-8' src={ei} alt="" />
                    <img className='w-[30px] mr-4' src={element} alt="" />
                </div>
                <div className='flex items-center'>
                    <div className=''>
                        <h1 className='font-poppins text-[#8e8e8e] font-light'>Total Favourites</h1>
                        <h1 className='font-poppins text-black text-4xl font-semibold pt-1'>{addlove?.length}</h1>
                    </div>
                    <img className='w-[75px] ml-8' src={love} alt="" />
                </div>
            </div>
        </div>
    )
}

export default DashboardHome