import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import TopNavBar from '../TopNavBar/TopNavBar';
import mainBodyImgMob from '../assets/images/body-image-mobile.png';
import mainBodyImg from '../assets/images/body-image.png';
import boxIcon from '../assets/images/icons/box-icon.png';
import brainIcon from '../assets/images/icons/brain-icon.png';
import humanIcon from '../assets/images/icons/human-icon.png';
import reloadIcon from '../assets/images/icons/reload-icon.png';
import navLogo from '../assets/images/nav-logo.png';
import FeaturesList from './FeaturesList';
import SliderComponent from './Slider';

const HomePage = () => {
    return (
        <div className="font-spaceGrotesk">
            <TopNavBar />

            <div className="text-center mt-5 md:mt-14">
                <h1 className="text-[24px] leading-[30px]  md:text-[52px] font-bold md:leading-[70px] text-center px-4">A simple AI-native notes app for unstoppable thinkers</h1>
                <p className="text-[20px] leading-[28px] py-2 md:py-4 md:text-[36px] font-normal md:leading-[28px] text-center">Start unboxing your mind</p>
                <div className="flex justify-center my-1 md:my-2">
                    <img className="mx-2" src={boxIcon} alt="" />
                    <img className="mx-2" src={brainIcon} alt="" />
                    <img className="mx-2" src={reloadIcon} alt="" />
                    <img className="mx-2" src={humanIcon} alt="" />
                </div>
            </div>

            <div className="flex justify-center py-6 md:py-10 ">
                <img src={mainBodyImg} alt="img" className="hidden md:flex" />
                <img src={mainBodyImgMob} alt="img" className="md:hidden" />
            </div>

            <div>
                <div className="flex justify-center py-1 md:py-5">
                    <Link to="/google2.com">
                        <button className="w-[218px] h-[50px] rounded-[6px] border-[1px] border-[#F0F0F0] bg-brand-orange text-white shadow-[0px_0px_4px_1px_#0000000D] font-medium text-[18px] leading-[15px] hover:bg-orange-500">
                            Apply to get access
                        </button>
                    </Link>
                </div>

                <div className="flex justify-center pt-5">
                    <p className="text-[24px] font-bold leading-[15px] text-center">or</p>
                </div>

                <div className="flex justify-center py-6">
                    <h1 className="text-[24px] leading-[30px] md:text-[50px] font-bold md:leading-[60px] text-center px-8">
                        Skip the line by purchasing a <br className="hidden md:block" /> Premium membership
                    </h1>
                </div>
                <div className="flex justify-center py-3 md:py-6">
                    <Link to="/google2.com">
                        <button className="w-[218px] h-[50px] rounded-[32px] border-[1px] border-[#F0F0F0] bg-[#F9F9F9] text-brand-orange shadow-[0px_0px_4px_1px_#0000000D] font-medium text-[18px] leading-[15px] hover:bg-white">
                            Conscious Premium
                        </button>
                    </Link>
                </div>

                <FeaturesList />

                <div className="flex justify-center">
                    <SliderComponent />
                </div>

                {/* footer */}
                <div className="p-0 md:px-20 md:pb-10">
                    <div className="pt-8 md:pt-10">
                        <div className="dashed-line-transparent opacity-30 m-1 h-[1px]"></div>
                    </div>

                    <div className="py-8 md:py-10">
                        <div className="flex justify-center">
                            <img src={navLogo} alt="logo" className="w-[35px] md:w-[50px] mr-2" />
                        </div>
                        <div className="flex items-center justify-center py-1">
                            <p className="font-bold text-[25px] mr-2 ">Conscious note</p>
                            <p className="bg-brand-orange text-white px-1 rounded-md font-poppins font-normal text-[12px] mt-1">Beta</p>
                        </div>
                    </div>
                    {/* social links */}
                    <div className="flex justify-center items-center">
                        <Link to="/fb" className="px-1">
                            <div className="text-brand-gray ring-1 ring-brand-gray rounded-full p-1 hover:text-brand-orange hover:ring-brand-orange">
                                <RiFacebookFill size={18} />
                            </div>
                        </Link>
                        <Link to="/ins" className="px-1">
                            <div className="text-brand-gray ring-1 ring-brand-gray rounded-full p-1 hover:text-brand-orange hover:ring-brand-orange">
                                <RiInstagramLine size={18} />
                            </div>
                        </Link>
                        <Link to="/tw" className="px-1">
                            <div className="text-brand-gray ring-1 ring-brand-gray rounded-full p-1 hover:text-brand-orange hover:ring-brand-orange">
                                <RiTwitterFill size={18} />
                            </div>
                        </Link>
                        <Link to="/linkedin" className="px-1">
                            <div className="text-brand-gray ring-1 ring-brand-gray rounded-full p-1 hover:text-brand-orange hover:ring-brand-orange">
                                <RiLinkedinFill size={18} />
                            </div>
                        </Link>
                    </div>
                    <div className="py-6 md:py-10 flex justify-center">
                        <hr className="w-[110px] md:w-full" />
                    </div>

                    <div className="flex flex-col-reverse items-center md:flex-row md:justify-between text-brand-blue">
                        <div className="pb-6 md:p-0">
                            <p className="text-[14px] font-medium leading-[26px] text-center md:text-left">
                                Copyright © {new Date().getFullYear()} Conscious note. <br className="block md:hidden" /> All Rights Reserved
                            </p>
                        </div>
                        <div className="pb-6 md:p-0">
                            <p className="text-[14px] font-medium leading-[26px]">
                                <Link to="/privacy" className="hover:text-blue-900">
                                    Privacy Policy
                                </Link>
                                &ensp;
                                <span className="text-brand-orange">I</span>&ensp;<Link to="/terms">Terms and Conditions</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
