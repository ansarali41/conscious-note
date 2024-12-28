import checkIcon from '../../assets/icons/double-check-icon.svg';
import meeting1 from '../../assets/images/meetings/meeting-1.svg';
import meeting2 from '../../assets/images/meetings/meeting-2.svg';
import meeting3 from '../../assets/images/meetings/meeting-3.svg';
import MyTab from './MyTab';
import useMediaQuery from '@mui/material/useMediaQuery';

const MeetingSection = ({ imageSrc }) => (
    <div className="flex flex-col-reverse md:flex-row gap-[25px] md:gap-[41px] pt-[62px] md:pt-[120px]">
        <div className="w-full md:w-1/2 p-0 md:px-[86px] md:py-[81px]">
            <p className="font-Akkurat font-normal text-[16px] leading-[20px] md:text-[20px] md:leading-[25.34px]">Meetings</p>
            <p className="font-Akkurat font-normal text-[35px] leading-[44.01px]  md:text-[45px] md:leading-[57.01px] pt-[25px] md:pt-[32px]">
                Automate note-taking and get human-level
                <span className="font-['PP-Editorial-New'] font-normal italic  text-[#EA523C]"> meeting summaries</span>
            </p>
            <p className="font-Akkurat font-normal text-[17px] leading-[21.34px] md:text-[20px] md:leading-[25.34px] pt-[25px] md:pt-[32px]">
                Your digital life is more than clicks and scrolls—it&apos;s history in the making. Every screenshot, every pattern, and every insight becomes part of a living
                chronicle—your story, humanity&apos;s legacy.
            </p>

            <div className="grid grid-cols-2">
                <div className="col-span-2 md:col-span-1 flex items-center pt-[25px] md:pt-[32px]">
                    <img src={checkIcon} alt="" />
                    <p className="pl-[19px] font-Akkurat font-normal text-[18px] leading-[22.34px] md:text-[20px] md:leading-[25.34px] text-[#EA523C]">No bots</p>
                </div>

                <div className="col-span-2 md:col-span-1 flex items-center pt-[25px] md:pt-[32px]">
                    <img src={checkIcon} alt="" />
                    <p className="pl-[19px] font-Akkurat font-normal text-[18px] leading-[22.34px] md:text-[20px] md:leading-[25.34px] text-[#EA523C]">Shareable summaries</p>
                </div>

                <div className="col-span-2 md:col-span-1 flex items-center pt-[25px] md:pt-[32px]">
                    <img src={checkIcon} alt="" />
                    <p className="pl-[19px] font-Akkurat font-normal text-[18px] leading-[22.34px] md:text-[20px] md:leading-[25.34px] text-[#EA523C]">No bots</p>
                </div>

                <div className="col-span-2 md:col-span-1 flex items-center pt-[25px] md:pt-[32px]">
                    <img src={checkIcon} alt="" />
                    <p className="pl-[19px] font-Akkurat font-normal text-[18px] leading-[22.34px] md:text-[20px] md:leading-[25.34px] text-[#EA523C]">Shareable summaries</p>
                </div>
            </div>
        </div>

        <div className="w-full md:w-1/2">
            <img src={imageSrc} alt="" />
        </div>
    </div>
);

const DaysOf = () => {
    const isSm = useMediaQuery('(min-width: 393px)');
    const tabs = [
        {
            label: 'Humanity',
            value: '1',
        },
        {
            label: 'Me',
            value: '2',
        },
        {
            label: 'History',
            value: '3',
        },
    ];
    return (
        <section className="max-w-[1920px] mx-auto px-[16px] py-[109px] md:px-[117px] md:pt-[127px] pb-0">
            <div className="flex-col md:flex-row flex justify-center gap-[43px] md:gap-[95px]">
                <div className="text-center">
                    <p className="font-UniSans font-black italic text-[31.49px] leading-[38.79px] md:text-[56.49px] md:leading-[67.79px] bg-[#EA523C] text-[#F6EFE5] px-[6px] py-[3px] md:px-[11px] md:py-[5px] rounded-sm text-center inline-block">
                        DAYS OF
                    </p>
                </div>
                <div>
                    <MyTab tabs={tabs} tabStyles={{ width: isSm ? 120 : 150 }} />
                </div>
            </div>
            <MeetingSection imageSrc={meeting1} />
            <MeetingSection imageSrc={meeting2} />
            <MeetingSection imageSrc={meeting3} />
        </section>
    );
};

export default DaysOf;
