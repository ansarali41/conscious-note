import { MdOutlineSavedSearch } from 'react-icons/md';
import checkIcon from '../../assets/icons/double-check-icon.svg';
import MyButton from '../MyButton';
import MyTab from './MyTab';

const YearlyMembershipCard = () => {
    return (
        <div className="px-[33px] py-[25px] md:p-[55px]">
            <div
                className="flex items-center justify-center border-[1px] border-[#0000001C] rounded-md 
            p-[12px] md:py-[10px] md:px-[130px]"
            >
                <MdOutlineSavedSearch color="#EA523C" size={25} />
                <p className="font-Akkurat font-normal  text-[16px] leading-[20.34px] md:text-[20px] md:leading-[25.34px] text-[#EA523C] ">Save 34% compared to monthly.</p>
            </div>
            <div
                className="bg-[#EA523C0A] mt-[30px] inline-block py-[5px] px-[10px] 
             md:py-[8px] md:px-[18px] rounded-[55px]"
            >
                <p className="text-center font-Akkurat font-normal  text-[28px] leading-[35.01px] md:text-[45px] md:leading-[57.01px] text-[#EA523C]">Pro</p>
            </div>
            <p className="text-start md:text-center font-['PP-Editorial-New'] font-normal italic text-[22px] leading-[28.16px] pt-[11px] md:pt-[14px] text-[#EA523C]">
                One simple plan that has it all
            </p>

            <div className="flex items-center justify-start md:justify-center md:pt-[30px] pt-[28px]">
                <div className="flex items-center pr-[10px]">
                    <p className="font-['PP-Editorial-New-ultra-bold'] font-extrabold text-[32px] leading-[40.96px] ">$</p>
                    <p className="font-['PP-Editorial-New-ultra-bold'] font-extrabold text-[45px] leading-[57.6px]">19</p>
                </div>
                <div>
                    <p className="text-[#979797] font-Akkurat font-normal text-[18px] leading-[22.34px]">
                        per month <br /> billed yearly <br />
                        7-day free trial
                    </p>
                </div>
            </div>

            <div className="flex justify-start  md:justify-center">
                <div>
                    <div className="flex items-center pt-[22px] md:pt-[32px]">
                        <img src={checkIcon} alt="" />
                        <p className="pl-[19px] font-Akkurat font-normal text-[20px] leading-[25.34px] text-[#EA523C]">No bots</p>
                    </div>

                    <div className=" flex items-center pt-[22px] md:pt-[32px]">
                        <img src={checkIcon} alt="" />
                        <p className="pl-[19px] font-Akkurat font-normal text-[20px] leading-[25.34px] text-[#EA523C]">Shareable summaries</p>
                    </div>

                    <div className=" flex items-center pt-[22px] md:pt-[32px]">
                        <img src={checkIcon} alt="" />
                        <p className="pl-[19px] font-Akkurat font-normal text-[20px] leading-[25.34px] text-[#EA523C]">Shareable summaries</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-[30px]">
                <MyButton className="w-full md:w-auto px-[20px] md:px-[34px]">Schedule onboarding call</MyButton>
            </div>
            <div>
                <p className="font-Akkurat font-normal text-[16px] leading-[20.34px] md:text-[20px] md:leading-[25.34px] md:text-center pt-[30px]">
                    Schedule your onboarding call to join the selected <br />
                    community shaping history.
                </p>
            </div>
        </div>
    );
};

export default function Membership() {
    const tabs = [
        {
            label: 'Yearly',
            value: '1',
            component: <YearlyMembershipCard />,
        },
        {
            label: 'Monthly',
            value: '2',
            component: <YearlyMembershipCard />,
        },
    ];

    return <MyTab tabs={tabs} tabStyles={{ width: '50%' }} panelStyles={{ padding: '0px' }} />;
}
