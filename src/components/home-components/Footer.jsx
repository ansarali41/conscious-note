import { CiFacebook, CiInstagram, CiLinkedin } from 'react-icons/ci';
import TwitterIcon from './TwitterIcon';
import { Divider } from '@mui/material';

const Footer = () => {
    return (
        <div>
            <div className="pt-[104px] pb-[57px]">
                <Divider orientation="horizontal" flexItem sx={{ border: '2px solid #FFFFFF' }} />
            </div>
            <div className="flex justify-center">
                <p className="font-UniSans font-black italic text-[43.69px] leading-[52.42px] bg-[#EA523C] text-[#F6EFE5] px-[9px] py-[4px] rounded-sm text-center inline-block">
                    DAYS OF
                </p>
            </div>
            <div className="flex justify-center gap-[22px] mt-[25px] pb-[57px]">
                <CiFacebook className="text-[34px] hover:text-[#EA523C]" />
                <TwitterIcon />
                <CiInstagram className="text-[34px] hover:text-[#EA523C]" />
                <CiLinkedin className="text-[34px] hover:text-[#EA523C]" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center bg-[#EA523C] px-[56px] py-[16px] md:pt-[21px] md:pb-[17px] md:px-[107px] text-white">
                <div>
                    <p className="font-Akkurat font-normal text-[20px] leading-[26px]">Copyright Day Of. All Right Reserved</p>
                </div>
                <div className="pt-[11px] md:pt-0">
                    <p className="font-Akkurat font-normal text-[20px] leading-[26px]">Privacy Policy &nbsp;&nbsp; | &nbsp;&nbsp; Terms of Service</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
