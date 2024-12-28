import { CiFacebook, CiInstagram, CiLinkedin } from 'react-icons/ci';
import TwitterIcon from './TwitterIcon';

const Footer = () => {
    return (
        <div>
            <div className="border-t-[1px] border-b-[1px] border-white"></div>
            <div className="flex justify-center pt-[57px]">
                <p className="font-UniSans font-black italic text-[43.69px] leading-[52.42px] bg-[#EA523C] text-[#F6EFE5] px-[8px] py-[3px] rounded-sm text-center inline-block">
                    DAYS OF
                </p>
            </div>
            <div className="flex justify-center gap-[22px] mt-[25px] pb-[57px]">
                <CiFacebook className="text-[38px] hover:text-[#EA523C]" />
                <TwitterIcon />
                <CiInstagram className="text-[38px] hover:text-[#EA523C]" />
                <CiLinkedin className="text-[38px] hover:text-[#EA523C]" />
            </div>

            <div className="flex justify-between items-center bg-[#EA523C] pt-[21px] pb-[17px] px-[103px] text-white">
                <div>
                    <p className="font-Akkurat font-normal text-[20px] leading-[26px]">Copyright Day Of. All Right Reserved</p>
                </div>
                <div>
                    <p className="font-Akkurat font-normal text-[20px] leading-[26px]">Privacy Policy | Terms of Service</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
