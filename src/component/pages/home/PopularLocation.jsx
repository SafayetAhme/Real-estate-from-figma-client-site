import layot from '../../../../public/image/layot.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const card = [
    {
        "name": "Kelowna",
        "title": "1,230 Properties",
        "image": "https://i.ibb.co/CnPmmcL/Image-2.png"
    },
    {
        "name": "California",
        "title": "1,190 Properties",
        "image": "https://i.ibb.co/SV2sW87/Image-1.png"
    },
    {
        "name": "New York",
        "title": "1,710 Properties",
        "image": "https://i.ibb.co/XzYM5gN/Image.png"
    },
    {
        "name": "Miami",
        "title": "670 Properties",
        "image": "https://i.ibb.co/bbTP59S/Group-427320059.png"
    },
    {
        "name": "California",
        "title": "1,190 Properties",
        "image": "https://i.ibb.co/zfs7x3D/houseown.png"
    },
    {
        "name": "Kelowna",
        "title": "1,230 Properties",
        "image": "https://i.ibb.co/v3Kc655/houseforth.png"
    },
    {
        "name": "New York",
        "title": "1,710 Properties",
        "image": "https://i.ibb.co/c6NKMhR/housetwo.png"
    },
    {
        "name": "Miami",
        "title": "670 Properties",
        "image": "https://i.ibb.co/M8Qn5KP/housethri.png"
    }
]


const PopularLocation = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1020 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1020, min: 920 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 920, min: 264 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 264, min: 0 },
            items: 1
        }
    };
    return (
        <div className='container mx-auto'>
            <div className='text-center lg:w-[1042px] mx-auto lg:pt-[70px] md:pt-[50px] sm:pt-[30px]'>
                <div class="lg:text-[50px] sm:text-[42px] md:text-[36px] text-[46px] lg:font-medium md:font-bold sm:font-bold  font-bold  text-center lg:leading-[80px] sm:leading-[60px] leading-[60px] ">Explore Popular Location</div>
                <img className='lg:w-60 md:w-60 w-0 ml-[594px] -mt-4' src={layot} alt="" />
                <p className='lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px] pt-[10px] pb-[57px]'>Explore the latest listings & projects in diverse areas</p>
            </div>

            {/*  */}
            <div className='grid pb-12 lg:grid-cols-1 px-12'>
                <Carousel responsive={responsive}>
                    {
                        card.map((d) => (
                            <div class="relative grid h-[20rem] w-full max-w-[15.80rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                                <Link to="/Property">
                                    <div
                                        class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none" style={{ backgroundImage: `url(${d.image})` }}>
                                        <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                                    </div>
                                </Link>
                                <div class="relative p-6 px-6 py-8 md:px-12">
                                    <h2 class=" block font-sans text-3xl font-medium leading-[1.5] tracking-normal text-white antialiased">{d.name}</h2>
                                    <h5 class="block font-sans text-xl antialiased font-normal leading-snug tracking-normal text-gray-400">{d.title}</h5>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default PopularLocation