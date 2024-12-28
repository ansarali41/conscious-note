import quote from '../../assets/icons/qoutation-icon.svg';
import userPhoto from '../../assets/images/Photo.svg';

const Reviews = () => {
    return (
        <section className="px-[16px] md:px-[0px]">
            <div className="flex justify-center pt-[109px] pb-[62px] md:pt-[165px] md:pb-[125px]">
                {/* md view */}
                <div className="hidden md:block">
                    <p className="font-Akkurat font-normal text-[45px] leading-[57.01px]">A fully independent project</p>
                    <p className="pl-[100px] font-Akkurat font-normal text-[45px] leading-[57.01px]">
                        completely supported by the <span className="font-['PP-Editorial-New'] font-normal italic text-[45px] leading-[57.6px]">humans</span> participating
                    </p>
                </div>

                {/* sm view */}
                <div className="block md:hidden">
                    <p className="font-Akkurat font-normal text-[33px] leading-[44.01px] text-center">
                        A fully independent project completely supported by the
                        <span className="font-['PP-Editorial-New'] font-normal italic"> humans</span> participating
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-0 md:px-[313px] gap-[48px]">
                {/* 1st review */}
                <div className="col-span-1 bg-[#F6EFE5] ">
                    <div className="flex bg-white px-[12px] py-[22px] md:pl-[26px] md:pr-[37px] md:py-[54px] border-[4px] border-solid border-[#EA523C08] rounded-[10px]">
                        <div className="pr-[12px] md:pr-[19px]">
                            <img src={quote} alt="..." className="w-[100px] md:w-[110px]" />
                        </div>
                        <div>
                            <p className="font-Akkurat font-normal text-[18px] leading-[22px] md:text-[32px] md:leading-[28px] text-[#EA523C]">Where was this Plugin Yesterday?</p>
                            <p className="font-Akkurat font-normal text-[17px] leading-[21px] md:text-[22px] md:leading-[25px] text-[#666666] pt-[10px] md:pt-[17px]">
                                I want connection and to genuinely feel I’m showing up for people. Some things that are important to others don’t strike me as such, so this gives
                                me a superpower to be able to show up for others.
                            </p>
                        </div>
                    </div>
                    {/* user info */}
                    <div className="flex items-center gap-3 pt-[22px] md:pt-[30px]">
                        <div>
                            <img src={userPhoto} alt="" />
                        </div>
                        <div>
                            <p className="font-Akkurat font-normal text-[18px] leading-[24px] tracking-[0.2px]">Giana</p>
                            <p className="font-Akkurat font-normal text-[14px] leading-[24px] tracking-[0.2px] text-[#666666]">Rick M New Zealand</p>
                        </div>
                    </div>
                </div>

                {/* 2nd review */}
                <div className="col-span-1 ">
                    <div className="col-span-1 bg-[#F6EFE5]">
                        <div className="flex bg-white px-[12px] py-[22px] md:pl-[26px] md:pr-[37px] md:py-[54px] border-[4px] border-solid border-[#EA523C08] rounded-[10px]">
                            <div className="pr-[12px] md:pr-[19px]">
                                <img src={quote} alt="..." className="w-[100px] md:w-[110px]" />
                            </div>
                            <div>
                                <p className="font-Akkurat font-normal text-[18px] leading-[22px] md:text-[32px] md:leading-[28px] text-[#EA523C]">
                                    Where was this Plugin Yesterday?
                                </p>
                                <p className="font-Akkurat font-normal text-[17px] leading-[21px] md:text-[22px] md:leading-[25px] text-[#666666] pt-[10px] md:pt-[17px]">
                                    I want connection and to genuinely feel I’m showing up for people. Some things that are important to others don’t strike me as such, so this
                                    gives me a superpower to be able to show up for others.
                                    <br />I want connection and to genuinely feel I’m showing up for people. Some things that are important to others don’t strike me as such, so
                                    this gives me a superpower to be able to show up for others.
                                </p>
                            </div>
                        </div>

                        {/* user info */}
                        <div className="flex items-center gap-3 pt-[22px] md:pt-[30px]">
                            <div>
                                <img src={userPhoto} alt="" />
                            </div>
                            <div>
                                <p className="font-Akkurat font-normal text-[18px] leading-[24px] tracking-[0.2px]">Giana</p>
                                <p className="font-Akkurat font-normal text-[14px] leading-[24px] tracking-[0.2px] text-[#666666]">Rick M New Zealand</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
