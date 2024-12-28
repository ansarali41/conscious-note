import { Link } from 'react-router-dom';
import threeDots from '../assets/icons/three-dots.svg';
import './TopNavBar.css';

const TopNavBar = () => {
    return (
        <nav className="w-full bg-[#F6EFE514] py-[13px] md:py-[24px] rounded-[6px] md:rounded-xl backdrop-filter backdrop-blur-[20px]">
            <div className="px-[13px] md:px-[75px] flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className=" bg-red-500 px-[4px] md:px-[10px] py-[2px] md:py-[3px] rounded-[4px]">
                    <p className="text-[#F8E5DA] font-UniSans font-black italic text-[22.6px] md:text-[49px] leading-[27.11px] md:leading-[58.8px] ">DAYS OF</p>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-[68px]">
                    <Link to="/about-us" className="text-white font-Akkurat font-normal text-[20px] leading-[25.34px]">
                        About us
                    </Link>
                    <Link to="/how-it-works" className="text-white font-Akkurat font-normal text-[20px] leading-[25.34px]">
                        How it works
                    </Link>
                    <Link to="/subscribe" className="text-white font-Akkurat font-normal text-[20px] leading-[25.34px]">
                        Subscribe for free
                    </Link>
                </div>
                <div className="hidden md:block">
                    <Link to="/create-history" className="bg-[linear-gradient(180deg,#FF9680_0%,#EA523C_76.5%)] text-white px-6 py-2 rounded-full font-Akkurat">
                        Create history with us
                    </Link>
                </div>
                <div className="md:hidden">
                    <img src={threeDots} alt="three dots" className="cursor-pointer" />
                </div>
            </div>
        </nav>
    );
};

export default TopNavBar;
