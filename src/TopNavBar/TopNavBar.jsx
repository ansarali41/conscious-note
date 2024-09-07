import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import './TopNavBar.css';
import { Link } from 'react-router-dom';

import navLogo from '../assets/images/nav-logo.png';

const TopNavBar = () => {
    return (
        <div>
            <Disclosure as="nav" className="px-4 py-2 md:px-32 md:pt-6 shadow md:shadow-none">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <img src={navLogo} alt="logo" className="w-[35px] md:w-[50px] mr-2" />
                        <Link to="/google.com">
                            <p className="font-bold text-[20px] md:text-[26px] mr-2 text-brand-blue ">Conscious note</p>
                        </Link>
                        <p className="bg-brand-orange text-white px-1 rounded-md font-poppins font-normal text-[12px] mt-1">Beta</p>
                    </div>

                    {/* nav buttons desktop view */}
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <div className="flex items-center">
                            <Link to="/google1.com">
                                <button className="h-[50px] rounded-[6px]  text-brand-orange font-medium text-[18px] leading-[15px] px-6 hover:bg-[#e8e8e8]">Login</button>
                            </Link>
                            <Link to="/google2.com">
                                <button className="w-[218px] h-[50px] rounded-[6px] border-[1px] border-[#F0F0F0] bg-[#F9F9F9] text-brand-orange shadow-[0px_0px_4px_1px_#0000000D] font-medium text-[18px] leading-[15px] hover:bg-white">
                                    Apply to get access
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="-mr-2 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black  hover:text-black focus:outline-none">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                </div>

                {/* Mobile menu button */}
                <DisclosurePanel className="sm:hidden shadow-lg absolute home-container w-full mt-[9px] left-0">
                    <div className="space-y-1 py-8">
                        <DisclosureButton as="div" className="border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium flex justify-center">
                            <Link to="/google1.com">
                                <button className="w-[270px] bg-white h-[50px] rounded-[6px]  text-brand-orange font-medium text-[18px] leading-[15px] px-6 hover:bg-[#e8e8e8]">
                                    Login
                                </button>
                            </Link>
                        </DisclosureButton>
                        <DisclosureButton as="div" className="border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium flex justify-center">
                            <Link to="/google2.com">
                                <button className="w-[270px] h-[50px] rounded-[6px] border-[1px] border-[#F0F0F0] bg-brand-orange text-white shadow-[0px_0px_4px_1px_#0000000D] font-medium text-[18px] leading-[15px] hover:bg-orange-500">
                                    Apply to get access
                                </button>
                            </Link>
                        </DisclosureButton>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    );
};

export default TopNavBar;
