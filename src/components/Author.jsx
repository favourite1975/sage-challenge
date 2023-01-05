import {card, wilson} from "../assets/index"
const Author = () => {
    return ( 
        <div className="w-full flex flex-col lg:flex-row xl:flex-row mb-8">
            <div className="w-1/2 bg-[#f4511e] bg-opacity-10 flex flex-col justify-center px-20">
                <div>
                    <p className="font-inter text-[21px] font-normal text-secondary leading-[36px] pl-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam interdum nisl et nunc facilisis, a commodo eros mollis. 
                        Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur
                        ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
                        faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
                    </p>
                </div>
                <div className="flex flex-row py-4">
                    <div className="pr-4 pl-6">
                        <img src={wilson} alt="" />
                    </div>
                    <div>
                        <div className="font-interb text-[18px] font-bold text-primary">
                            Harry Wilson
                        </div>
                        <div>Property Owner</div>
                    </div>
                </div>
                <div className="flex flex-row py-4 pl-6">
                    <div className="font-bold text-4xl text-primary pr-1">.</div>
                    <div className="font-bold text-4xl text-[#D9DBE1] pr-1">.</div>
                    <div className="font-bold text-4xl text-[#D9DBE1]">.</div>
                </div>
            </div>
            <div className="w-1/2">
                <img src={card} alt="" className="w-full h-[590px]"/>
            </div>
        </div>
     );
}
 
export default Author;