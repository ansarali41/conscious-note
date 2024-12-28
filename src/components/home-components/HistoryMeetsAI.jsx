import vectorBg from '../../assets/images/AI-bg-vector.svg';

const HistoryMeetsAI = () => {
    return (
        <div className="m-[7px] md:m-[15px]">
            <div className="bg-black mt-[180px] md:mt-[93px] rounded-md" style={{ backgroundImage: `url(${vectorBg})`, backgroundSize: 'cover' }}>
                <div className="max-w-[1920px] mx-auto">
                    <div className="grid grid-cols-2 text-white py-[40px] px-[22px] md:py-[102px] md:px-[103px] gap-[25px] md:gap-[99px]">
                        <div className="col-span-2 md:col-span-1">
                            <p className="font-Akkurat font-normal text-[16px] leading-[20px] md:text-[20px] md:leading-[25.34px] text-center md:text-left">HISTORY MEETS AI</p>

                            <p className="font-Akkurat font-normal text-[35px] leading-[44px] md:text-[42px] md:leading-[57.01px] pt-[25px] md:pt-[32px]">
                                We engineered <span className="font-UniSans font-black italic">DAYS OFF</span> for intelligence, and designed it for
                            </p>
                            <p className="font-PPEditorialNew font-normal font-italic text-[45px] leading-[57.6px] text-center text-[#EA523C]">your every day</p>
                        </div>
                        <div className="col-span-2 md:col-span-1 flex justify-center items-center">
                            <p className="font-Akkurat font-normal text-[20px] leading-[25.34px] text-center md:text-left">
                                Your digital life is more than just clicks and scrolls—it&apos;s history in the making. Every screenshot, every pattern, and every insight becomes
                                part of a living chronicle—your story, humanity&apos;s legacy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryMeetsAI;
