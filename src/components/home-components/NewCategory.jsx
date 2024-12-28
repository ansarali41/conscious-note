import princeTonUniversityImg from '../../assets/images/prince-ton-university.svg';
import newCategoryImg from '../../assets/images/new-category.svg';

const NewCategory = () => {
    return (
        <section className="max-w-[1920px] mx-auto">
            <div className="px-[7px] pt-[109px] md:px-[0px] md:pt-[146px] flex-col md:flex-row flex items-center justify-center">
                <div className="text-center md:text-start">
                    <p className="font-Akkurat font-normal text-[35px] leading-[44.34px] md:text-[45px] md:leading-[57.01px] ">A new category of AI-native history,</p>

                    <p className="font-Akkurat font-normal text-[35px] leading-[44.34px] md:text-[45px] md:leading-[57.01px] pl-[0px] md:pl-[290px]">
                        created by <span className="italic font-light">historians and technologists from</span>
                    </p>
                </div>

                <div className="flex items-end justify-center">
                    <img src={princeTonUniversityImg} alt="" className="max-w-[177px] md:max-w-[266.67px] max-h-[150px] md:mt-[40px]" />
                </div>
            </div>
            <div className="pt-[100px] md:pt-[84px]">
                <img className="w-full scale-[2.5] md:scale-100 max-h-[424px]" src={newCategoryImg} alt="" />
            </div>
        </section>
    );
};

export default NewCategory;
