import { useState } from 'react';
import MyButton from '../MyButton';
import MyInput from '../MyInput';
import sectionBg from '../../assets/images/contact-form-bg.svg';

const FAQItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className={`my-[15px] md:my-[22px] rounded-[12px] border-[6px] border-solid ${isOpen ? 'border-[#EA523C12]' : 'border-2 border-[#EA523C12]'} bg-white`}>
            <button type="button" className="flex items-center justify-between w-full p-5 text-left" onClick={onClick}>
                <p className="font-Akkurat font-normal text-[22px] leading-[27.87px]">{title}</p>
                <svg
                    className={`w-3 h-3 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                    stroke="#EA523C"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
            </button>
            <div className={`bg-white overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="px-[12px] py-[16px]  md:px-[26px] md:py-[23px] font-Akkurat font-normal text-[18px] leading-[22.81px]">{content}</p>
            </div>
        </div>
    );
};

const ContactUs = () => {
    return (
        <>
            <p className="font-Akkurat font-normal text-[26px] leading-[32px] md:text-[45px] md:leading-[57.01px] text-center md:text-start">Contact us</p>

            <form
                className="bg-[#F8F2E9] border-[5px] border-solid border-[#F9F4EE] rounded-[12px] px-[12px] py-[22px] md:p-[30px]"
                style={{ backgroundImage: `url(${sectionBg})`, backgroundSize: 'cover' }}
            >
                <p className="font-Akkurat font-normal  text-[18px] leading-[22.34px] md:text-[20px] md:leading-[25.34px] text-center md:text-start text-[#333333]">
                    Submit a question here to get in touch. We’re super responsive.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] md:gap-[52px] pt-[22px] md:pt-[30px]">
                    <MyInput placeholder="First name..." />

                    <MyInput placeholder="Last name..." />
                </div>
                <div className="pt-[22px] md:pt-[30px]">
                    <MyInput placeholder="Email..." />
                </div>
                <div className="pt-[22px] md:pt-[30px]">
                    <MyInput placeholder="How can we help you..." type="textarea" rows="5" />
                </div>
                <div className="flex justify-center pt-[30px]">
                    <MyButton className=" px-[42px] py-[8px] md:px-[86px] md:py-[13px]">Submit</MyButton>
                </div>
            </form>
        </>
    );
};

const ContactUsAndFaq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqItems = [
        {
            title: 'Lorem Ipsum is simply dummy text of the printing and typesetting?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting.',
        },
        {
            title: 'Lorem Ipsum is simply dummy text of the printing and typesetting?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting.',
        },
        {
            title: 'Lorem Ipsum is simply dummy text of the printing and typesetting?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting.',
        },
        {
            title: 'Lorem Ipsum is simply dummy text of the printing and typesetting?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting.',
        },
        {
            title: 'Lorem Ipsum is simply dummy text of the printing and typesetting?',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting.',
        },
    ];
    return (
        <div className="max-w-[1920px] mx-auto px-[16px] md:px-[0px]">
            <div className="flex justify-center pt-[78px] pb-[62px] md:pt-[185px] md:pb-[103px]">
                {/* md view */}
                <div className="hidden md:block">
                    <p className="font-Akkurat font-normal text-[45px] leading-[57.01px]">The more you use it, the more it reveals about</p>
                    <p className="font-['PP-Editorial-New'] font-normal italic text-[45px] leading-[57.6px] text-end pl-[735px] text-[#EA523C]">the days we have together</p>
                </div>

                {/* sm view */}
                <div className="block md:hidden">
                    <p className="font-Akkurat font-normal text-[33px] leading-[44.01px]">
                        The more you use it, the more it reveals about <span className="font-['PP-Editorial-New'] font-black italic text-[#EA523C]">the days we have together</span>
                    </p>
                </div>
            </div>
            <div className="px-[0px] md:px-[103px]">
                <div className="flex flex-col-reverse md:flex-row gap-[62px] md:gap-[97px]">
                    <div className="w-full md:w-1/2">
                        <ContactUs />
                    </div>

                    <div className="w-full md:w-1/2">
                        {/* FAQ Section */}
                        <div>
                            <p className="font-Akkurat font-normal text-[26px] leading-[32px] md:text-[45px] md:leading-[57.01px] text-center md:text-start">FAQs</p>
                            <div>
                                {faqItems.map((item, index) => (
                                    <FAQItem
                                        key={index}
                                        title={item.title}
                                        content={item.content}
                                        isOpen={index === openIndex}
                                        onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsAndFaq;
