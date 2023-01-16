// Data
import data from '../data/data.json'

import {useEffect} from "react"

import AOS from "aos";
import "aos/dist/aos.css";

const Properties = () => {
    let properties = data.properties

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return ( 
       <>
            <div className="w-full flex justify-center items-center px-2 ">
                <div className='lg:grid lg:grid-cols-3 xl:grid-cols-3 md:grid md:grid-cols-2 flex flex-row px-0 overflow-x-auto pt-8 gap-8 justify-items-center lg:gap-20 xl:gap-5'>
                    {properties.map((property) => {
                        return (
                            <div key={property.id} className="flex cursor-pointer flex-col justify-start border-2 border-[#979797] mb-8 shadow-2xl rounded-[26.6166px]" data-aos="flip-left" data-aos-duration="2000">
                                <div className=''>
                                    <img src={property.propertyImg} alt=""  className='w-full'/>
                                </div>
                                <div className="px-[8rem] flex lg:hidden lg:px-0 md:px-0 xl:px-0"></div>
                                <div className='px-4 pt-2 pb-5'>
                                    <div className="pt-2 font-dmsan text-black font-bold capitalize font-normal text-[18px]">{property.address}</div>
                                    <div className='font-normal pt-2 capitalize font-dmsan text-[18px] text-[#818181]'>{property.room}</div>
                                    <div className='font-bold pt-2 capitalize font-dmsan text-[22px] text-[#F4511E]'>{property.price}</div>
                                </div>
                                <div className='flex justify-center w-full items-center'>
                                <div className="grid grid-cols-3 divide-x divide-[#E4E4E4] w-full border-t-2 border-[#E4E4E4]">
                                    <div className='text-center py-3 flex flex-row justify-center items-center'>
                                        <div>
                                            <img src={property.bedIcon} alt="" className='pr-2'/>
                                        </div>
                                        <div>4</div>
                                    </div>
                                    <div className='text-center py-3 flex flex-row justify-center items-center'>
                                        <div>
                                            <img src={property.shape} alt="" className='pr-2'/>
                                        </div>
                                        <div>2</div>
                                    </div>
                                    <div className='py-3 flex flex-row justify-center items-center'>
                                        <div>
                                            #
                                        </div>
                                        <div>2</div>
                                    </div>

                                </div>
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
            </div>
       </> 
     );
}
 
export default Properties;
