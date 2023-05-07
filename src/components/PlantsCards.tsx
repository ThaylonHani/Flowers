"use client";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';

import { useState,useEffect } from "react";

import 'swiper/css';

export  function PlantsCards() {
    
    const [plants, setPlants] = useState<plantsProps[]>();
    const [plantsInfo, setPlantsInfo] = useState<plantsProps>();
    const [swiperRef, setSwiperRef] = useState<any>();

    useEffect(() => {
        fetch("http://localhost:3000/api/plants", { next: { revalidate: 10000 } }).then(res => res.json()).then(res => { setPlants( res.plants), setPlantsInfo(res.plants[0]) });
            
    },[]);
    
    
SwiperCore.use([Virtual, Navigation, Pagination]);

    interface plantsProps {
        id: string;
        name: string;
        scientificName:string;
        family: string;
        description: string;
        primaryColor: string;
        secondaryColor: string;
        img: string;
    }
    
    const slideTo = (index : number) => {
        swiperRef.slideTo(index - 1, 0);
      };
    
    return (
        <div className="w-screen max-w-full  h-full flex flex-col gap-4 p-2 rounded-lg   ">

            <section className="flex p-4 justify-between items-center relative h-[50%] ">
                <div className="w-1/2 text-center p-3 ">
                    <h1 className="text-2xl" style={{color: plantsInfo?.primaryColor }}>
                        {plantsInfo?.name}
                    </h1>
                    <p>
                    {plantsInfo?.description}
                    </p>
                </div>
                <img src={plantsInfo?.img} alt="" className="rounded-lg w-1/2 min-w-[50%] max-w-[50%] h-fit" />
                <label
                    htmlFor=""
                    className="p-4 w-full absolute bottom-0 left-0 h-fit m-auto opacity-40  top-0 right-0 -z-10 rounded-lg transition-all duration-200 ease-out"
                    style={{ backgroundColor: plantsInfo?.secondaryColor }}></label>
            </section>
            <section className="w-full flex items-center relative my-4  rounded-lg self-center ">
                <section className="flex justify-around w-full">
                <button className="bg-[#6C733D] p-2 px-4  rounded-lg" onClick={() => slideTo(Number(plantsInfo?.id) - 1)} >
                    <AiOutlineArrowLeft/>
                    </button>
                    {`${plantsInfo?.id }/${plants?.length}`}
                <button className="p-2 bg-[#9DA65D] px-4 rounded-lg" onClick={() => slideTo(Number(plantsInfo?.id) + 1)}>
                    <AiOutlineArrowRight/>
                </button>
                </section>
                
            </section>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                centeredSlides
                modules={[Virtual]}
                virtual
                onSlideChange={(slide) => setPlantsInfo(plants[slide.snapIndex] )}
                onSwiper={setSwiperRef}
                className="w-[90vw] h-24 flex justify-start items-start  "
            >

                {plants?.map((plant: plantsProps) => {
                    return (
                        <SwiperSlide key={plant.id}  className=" flex relative items-center justify-center shadow-lg shadow-black" virtualIndex={Number(plant.id)}>
                            <img src={plant.img} alt={`image of ${plant.name}`} className="w-1/2 self-center clip-circle select-none " width={50} height={50}  />
                            <p className="p-4 w-full h-1/2 -z-10 absolute  bottom-0 rounded-b-md opacity-20 transition-all duration-500 ease-out " style={{backgroundColor: plantsInfo?.id == plant.id ? '#9DA65D' : "#F2F2F2"}} >
                            </p>
                       </SwiperSlide>
                    )
                })
           }

            </Swiper>

           
       </div>
            
            
                

    )
}