// Data
import data from '../data/data.json';

import {logo} from "../assets/index" 

const Navbar = () => {
    let nav = data.nav
    return ( 
        <nav>
            <div className='w-full flex flex-col justify-start items-center'>
                <div className="w-full flex flex-row justify-start items-center pt-[2rem] pb-[1.5rem] px-[8rem]">
                    <div>
                        <img src={nav[0].brandLogo || logo} alt="logo" />
                    </div>
                    <div className="flex justify-center pl-[10rem] items-center">
                        {nav[1].navbarLink.map((navitems) => {
                            return(
                                <div key={navitems}>
                                    <a className='cursor-pointer text-white font-dmsan px-4 pb-9 hover:border-b-4 font-normal capitalize text-[18px] '>{navitems}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='border-b-2 w-[85%]'></div> 
            </div>
     
        </nav>
     );
}
 
export default Navbar;