import heroSectionBg from '../../assets/images-old/hero-section-bg.png';
import computerImg from '../../assets/images/computer-img.svg';
import MyButton from '../../components/MyButton';
import TopNavBar from '../../TopNavBar/TopNavBar';

const Banner = () => {
    return (
        <div className="max-w-[1920px] mx-auto relative">
            <div className="absolute top-2 md:top-3 left-4 md:left-7 z-10 w-[92%] md:w-[97%]">
                <TopNavBar />
            </div>
            <div className="bg-black rounded-md m-[7px] md:m-[15px]" style={{ backgroundImage: `url(${heroSectionBg})`, backgroundSize: 'cover' }}>
                <div className="grid grid-cols-2">
                    <div className="col-span-2 md:col-span-1 flex items-center">
                        <div className="px-[22px] md:px-[0px] pt-[122px] md:pt-[0px] md:pl-[100px]">
                            <p className="font-Akkurat text-[38px] md:text-[48px] font-normal leading-[48.15px] md:leading-[60.82px] text-center md:text-left text-white">
                                Track your digital activity with AI
                            </p>
                            <p
                                className="font-['PP_Editorial_New'] font-[200] italic 
                            text-[36px] leading-[48px] md:text-[48px] md:leading-[61.44px] text-white text-center md:text-end md:mr-[-150px] "
                            >
                                together with humanity
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 flex items-center">
                        <img src={computerImg} alt="computer" className="w-full scale-y-110 md:scale-100" />
                    </div>
                </div>

                <div className="px-[22px] md:px-[0px] md:absolute md:bottom-[73px] md:left-[50%] md:translate-x-[-50%]">
                    <div className="text-center">
                        <p className="text-white font-Akkurat font-normal text-[17px] leading-[21.54px] md:text-[20px] md:leading-[25.34px]">
                            Learn more and join our global experiment to document all of humanity with AI.
                        </p>
                    </div>
                    <div className="flex justify-center items-center pt-[30px] md:pt-[50px] pb-[70px] md:pb-[0px]">
                        <MyButton>Learn more</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
