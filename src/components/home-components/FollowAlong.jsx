import { Divider, useMediaQuery } from '@mui/material';
import galaxyTab from '../../assets/images/Galaxy-Tab-S8-Ultra.svg';
import MyButton from '../MyButton';
import Membership from './Membership';
import MyInput from '../MyInput';

const FollowAlong = () => {
    const isSm = useMediaQuery('(min-width: 300px)');
    return (
        <section className="px-[16px] md:px-[0px]">
            <div className="flex justify-center pt-[78px] pb-[62px] md:pt-[109px] md:pb-[125px]">
                {/* md view */}
                <div className="hidden md:block">
                    <p className="font-Akkurat font-normal text-[45px] leading-[57.01px]">Follow along or</p>
                    <p className="pl-[295px] font-Akkurat font-normal text-[45px] leading-[57.01px]">
                        join <span className="font-UniSans font-black italic text-[45px] leading-[54px]">days of</span> and
                        <span className="font-['PP-Editorial-New'] font-normal italic text-[45px] leading-[57.6px]"> create history with us</span>
                    </p>
                </div>

                {/* sm view */}
                <div className="block md:hidden">
                    <p className="font-Akkurat font-normal text-[33px] leading-[44.01px]">
                        Follow along or join <span className="font-UniSans font-black italic">days of</span> and create history with us
                    </p>
                </div>
            </div>

            <div className="flex-col md:flex-row flex justify-between px-[0px] pt-[0px] md:px-[192px] md:pt-[125px]">
                {/* 1st column */}
                <div>
                    <p className="font-Akkurat font-normal text-[26px] leading-[34px] md:text-[40px] md:leading-[46px]">
                        <span className="font-UniSans font-black italic text-[#EA523C]">days of</span> HUMANITY{' '}
                        <span className="font-UniSans font-black italic text-[18px] leading-[24px] md:text-[28px] md:leading-[24px] bg-[#EA523C] text-[#F6EFE5] md:px-[25px] md:py-[8px] px-[10px] py-[1px] rounded-sm text-center inline-block">
                            Free
                        </span>
                    </p>
                    <p className="font-Akkurat font-normal text-[18px] leading-[34px] md:text-[28px] md:leading-[46px]">— the weekly newsletter about all of us</p>

                    <p className="font-Akkurat font-normal text-[18px] leading-[22px] md:text-[24px] md:leading-[30.41px] pt-[22px]">
                        For people just trying to take a peek at what everyone’s doing 😉
                    </p>

                    <div className="py-[62px] md:py-[113px]">
                        <img src={galaxyTab} alt="" />
                    </div>

                    {/* check box */}
                    <div>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-[56px] h-[1.6rem] bg-[#F3F3F3] peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#EA523C] border-[.5px] border-[#C9C9C9]"></div>
                            <span className="pl-[18px] font-Akkurat font-normal text-[16px] leading-[20px] md:text-[20px] md:leading-[25.34px] text-gray-900 ">
                                Subscribe to the list and keep up with humanity
                            </span>
                        </label>
                    </div>

                    <div className="relative my-[28px] md:my-[35px]">
                        <MyInput placeholder={'Email...'} />

                        {/* md button */}
                        <MyButton className="hidden md:flex absolute right-4 top-[18px] px-[40px]">Subscribe for free</MyButton>
                    </div>

                    {/* sm button */}
                    <div className="flex justify-center md:hidden">
                        <MyButton className="w-full">Subscribe for free</MyButton>
                    </div>
                </div>

                {isSm ? (
                    <Divider orientation="horizontal" flexItem sx={{ border: '2px solid #fff', margin: '62px 0px' }} />
                ) : (
                    <Divider orientation="vertical" flexItem sx={{ border: '3px solid #fff' }} />
                )}

                {/* 2nd column */}
                <div>
                    <div>
                        <p className="font-Akkurat font-normal text-[26px] leading-[34px] md:text-[40px] md:leading-[46px]">
                            <span className="font-UniSans font-black italic  text-[#EA523C]">Days of</span> ME
                        </p>
                        <p className="font-Akkurat font-normal text-[18px] leading-[34px] md:text-[28px] md:leading-[46px]">— our AI-powered activity tracker</p>
                        <p className="font-Akkurat font-normal text-[18px] leading-[22.41px] md:text-[24px] md:leading-[30.41px]">
                            Give your daily activity a voice with a membership 😀
                        </p>
                        <Membership />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FollowAlong;
