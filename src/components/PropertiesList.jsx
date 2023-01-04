// Data
import data from '../data/data.json'

const PropertiesList = () => {
        let properties = data.properties
        console.log(properties)

    return ( 
        <div className="pl-20 bg-[#F5F5F5] pt-20 pb-10">
            <div className="w-full flex justify-between items-center pr-20">
                <div>
                    <h2 className="font-interb capitalize text-[26px] text-secondary"><span className="border-b-2 pb-2 w-full border-primary">list</span> of properties</h2>
                </div>
                <div>
                    <button className="bg-primary w-[200px] h-[65px] flex justify-center items-center  rounded-[5px]">View All Property</button>
                </div>
            </div>
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
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default PropertiesList;