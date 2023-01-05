import {useEffect} from "react"
import Navbar from "../components/Navbar";
// Data
import data from '../data/data.json'
import {map} from '../assets/index'
import { Menu } from '@headlessui/react'
import Dropdown from "../components/Dropdown";
import Offers from "../components/Offers";
import PropertiesList from "../components/PropertiesList";
import About from "../components/About";
import AddProperty from "../components/AddProperty";
import Author from "../components/Author";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";



const Home = () => {

    let home = data.home

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return ( 
        <div >
            <header className="bg-home h-screen w-full bg-cover bg-no-repeat ">
                <Navbar />

                <div className="flex w-full flex-row pt-12 justify-center items-center" >
                    <div className="w-1/2 " data-aos="fade-right" data-aos-duration="2000">
                        <div className="pr-[8rem] font-inter text-white leading-[70px] font-semibold capitalize font-normal text-[42px]">{home[0].title}</div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000">
                        <div>
                            <img src={map} alt="" />
                        </div>
                        <div className="py-4 rounded-xl gap-2 mx-5 bg-white pl-8 flex flex-row">
                            <div className="">
                                <Dropdown value={"all types"}/>
                            </div>
                            <div className="">
                                <Dropdown value={"Neighborhood"}/>
                            </div>
                            <div className="flex justify-center items-center bg-[#23A6F0] p-2 cursor-pointer rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section>
                    <Offers />
                </section>
                <section>
                    <PropertiesList />
                </section>
                <section>
                    <About />
                </section>
                <section data-aos="zoom-in" data-aos-duration="2000">
                    <AddProperty />
                </section>
                <section>
                    <Author />
                </section>
                <footer data-aos="fade-up" data-aos-duration="2000">
                    <Footer/>
                </footer>
            </main>
        </div>
     );
}
 
export default Home;