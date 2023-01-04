// Data
import data from '../data/data.json'
import { Tab } from '@headlessui/react'
import Properties from './Properties'

const PropertiesList = () => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

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
            <div className="">
            <Tab.Group>
                <Tab.Panels>
                    <Tab.Panel>
                        <Properties />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Properties />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Properties />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Properties />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Properties />
                    </Tab.Panel>
                </Tab.Panels>

                <div className='flex justify-center items-center px-20 py-10'>
                    <Tab.List className="flex w-1/2 space-x-1 rounded-xl border-4 text-primary p-1">
                            <Tab
                            className={({ selected }) =>
                                classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 ',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-primary text-white'
                                    : 'bg-[#BDBDBD] text-white '
                                )
                            }
                            >
                            first
                            </Tab>
                            <Tab
                            className={({ selected }) =>
                                classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-primary text-white shadow'
                                    : 'bg-white text-primary'
                                )
                            }
                            >
                            1
                            </Tab>
                            <Tab
                            className={({ selected }) =>
                                classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 ',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-primary text-white shadow'
                                    : 'bg-white text-primary'
                                )
                            }
                            >
                            2
                            </Tab>
                            <Tab
                            className={({ selected }) =>
                                classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-primary',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-primary text-white shadow'
                                    : 'bg-white text-primary'
                                )
                            }
                            >
                            3
                            </Tab>
                            <Tab
                            className={({ selected }) =>
                                classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-primary text-white shadow'
                                    : 'bg-white text-primary'
                                )
                            }
                            >
                            Next
                            </Tab>
                        </Tab.List>
                </div>
            </Tab.Group>
            </div>
        </div>
     );
}
 
export default PropertiesList;