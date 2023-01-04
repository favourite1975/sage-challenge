const About = () => {
    return ( 
        <div className="p-10 flex flex-col">
            <div className="flex w-full flex-row justify-center items-center px-[4rem]">

                <div className="w-1/2 flex flex-col gap-8">
                    <div className="flex flex-row gap-5">
                        <div className="w-[250px] h-[334px] text-white font-inter text-[24px] bg-flexible bg-cover bg-no-repeat text-center pt-2">Flexible Leases</div>
                        <div className="w-[270px] h-[270px] text-white font-inter text-[24px] bg-happiness bg-cover bg-no-repeat text-center pt-2 mt-12">7-Day Happiness Guaranteed</div>
                    </div>
                    <div className="flex flex-row gap-5 ">
                        <div className="w-[212px] h-[285px] text-white font-inter text-[24px] bg-cleaning bg-cover bg-no-repeat text-center pt-2">Monthly House Cleaning</div>
                        <div className="w-[338px] h-[356px] text-white font-inter text-[24px] px-1 bg-roomate bg-cover bg-no-repeat text-center pt-2">Choose Your Own Roommate</div>
                    </div>
                </div>

                <div className="w-1/2 pr-[10rem]">
                    <div>
                       <h1 className="font-interb text-[40px] text-secondary leading-[54px]">Flexibility and options to suit your lifestyle.</h1> 
                    </div>
                    <div className="py-5">
                       <p className="font-inter text-[18px] font-normal text-secondary leading-[32px]">
                            You need it? We got it. We make finding your next home easy, 
                            comfortable, and simple. From our happiness guarantee to our selective 
                            roommate finder option. We provide you the flexibility that you most desire.
                        </p> 
                    </div>
                    
                    <div>
                        <button className="bg-primary text-white w-[185px] h-[63px] flex justify-center items-center rounded-[13px]">search rooms</button>
                    </div>
                </div>

            </div>

            <div className="text-center mt-10">
                Your property with us and be Confident that Your Room will be Filled Out!
            </div>

        </div>
     );
}
 
export default About;