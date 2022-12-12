import { useState } from 'react'
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import {useWindowWidth} from '@react-hook/window-size'


export default function HeroSection (){

    const[selected, setSelected] = useState('TR')

    const windowWidth = useWindowWidth()

    const phones={
        US:'+1',
        DE:'+50',
        TR:'+90',
        IT:'+7',
        IN:'+15'
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };

    return (

       <div className="relative h-auto md:h-[500] before:bg-gradient-to-r before:from-violet-500 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
           {windowWidth >= 768 &&<Slider {...settings}>
               <div>
                   <img className="w-full h-[500px] object-cover" src= "https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"/>
               </div>
               <div>
                   <img className="w-full h-[500px] object-cover" src= "https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"/>
               </div>



           </Slider>}
           <div className="container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
               <div className="hidden md:block">
                   <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"/>
                   <h3 className="text-2xl md:text-4xl mt-8 font-semibold text-white">
                       Dakikalar içinde <br /> kapınızda <br />
                   </h3>
               </div>
               <div class="w-[500px] md:w-[400] rounded-lg bg-gray-50 p-6 ">

                    <h4 className="text-primary-brand-color text-center font-semibold mb-4"> Giriş yap veya Kayıt ol </h4>

                   <div class="grid gap-y-3">
                       <div className="flex gap-x-2 ">
                           <ReactFlagsSelect
                               countries={Object.keys(phones)}
                               customLabels={phones}
                               placeholder="Select Language "
                               onSelect={code => setSelected(code)}
                               selected={selected}
                               className="flag select "
                           />
                           <div className="flex-1 relative group block cursor-pointer">
                               <input required className="h-11 relative z-20 bg-transparent px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color outline-none peer text-sm focus:pt-2" />
                               <span className="absolute z-10 top-0 left-0 h-10 px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-6 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-6 peer-valid:text-primary-brand-color peer-valid:text-xs "> Telefon Numarası</span>
                           </div>
                       </div>
                       <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold "> Telefon numarası ile devam et</button>
                   </div>




               </div>
           </div>

       </div>
    )
}