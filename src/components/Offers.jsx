// Data
import data from '../data/data.json'

import {useEffect} from "react"

import AOS from "aos";
import "aos/dist/aos.css";

const Offers = () => {
    let offer = data.Offers

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return ( 
        <div className="py-20 pl-20">
            <h2 className="font-interb capitalize text-[26px] text-secondary"><span className="border-b-2 pb-2 w-full border-primary">minimum living cost</span> takes care of everything</h2>
            <div className='pt-2 flex flex-row justify-center '>
                <div data-aos="fade-up-right" data-aos-duration="2000">
                    <img src={offer[0].offerImg} alt="" />
                </div>
                <div className='grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 pt-8'>
                    {offer[1].map((offers) => {
                        return (
                            <div key={offers.id} className="flex flex-col justify-start px-20 w-full">
                                <div className=' p-4 flex justify-center items-center shadow-[0_12px_19px_rgba(0,0,0,0.15)] rounded w-[77px] rounded-[10px]'>
                                    <img src={offers.icon} alt="" />
                                </div>
                                <div className="pt-2 font-inter text-secondary leading-[35px] font-semibold capitalize font-normal text-[16px]">{offers.title}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default Offers;