// Data
import data from '../data/data.json'

const Properties = () => {
    let properties = data.properties

    return ( 
       <>

            <div>
            <div className="px-20">
                <div className='grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 pt-8 gap-5'>
                    {properties.map((property) => {
                        return (
                            <div key={property.id} className="flex flex-col justify-start border-2 border-[#979797] w-[80%] mb-8 shadow-[0_34.0693px_36.1986px_rgba(0,0,0,0.133714)] rounded-[26.6166px]">
                                <div className=''>
                                    <img src={property.propertyImg} alt="" />
                                </div>
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
            </div>
       </> 
     );
}
 
export default Properties;