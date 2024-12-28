// import heroSectionBg from '../../assets/images-old/hero-section-bg.png';
import { useState } from 'react';
import MyButton from '../MyButton';

const FAQItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className={`my-[15px] rounded-[12px] border-[6px] border-solid ${isOpen ? 'border-[#EA523C0F]' : 'border-2 border-[#EA523C1A]'} bg-white`}>
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
                <p className="p-5 font-Akkurat font-normal text-[18px] leading-[22.81px]">{content}</p>
            </div>
        </div>
    );
};

const ContactUs = () => {
    return (
        <>
            <p className="font-Akkurat font-normal text-[45px] leading-[57.01px]">Contact us</p>

            <form className="bg-[#F8F2E9] border-6 border-solid border-[#F9F4EE] rounded-[12px] p-[30px]">
                <p className="font-Akkurat font-normal text-[20px] leading-[25.34px]">Submit a question here to get in touch. We’re super responsive.</p>
                <div className="flex gap-[30px]">
                    <input
                        type="text"
                        className="border-[6px] border-solid  border-[#EA523C1A] rounded-[555px] bg-white p-[25px] w-full text-[20px] leading-[25.34px] placeholder:text-[#333333] focus:outline-none focus:ring-0"
                        placeholder="First name..."
                    />

                    <input
                        type="text"
                        className="border-[6px] border-solid  border-[#EA523C1A] rounded-[555px] bg-white p-[25px] w-full text-[20px] leading-[25.34px] placeholder:text-[#333333] focus:outline-none focus:ring-0"
                        placeholder="Last name..."
                    />
                </div>
                <div>
                    <input
                        type="email"
                        className="border-[6px] border-solid  border-[#EA523C1A] rounded-[555px] bg-white p-[25px] w-full text-[20px] leading-[25.34px] placeholder:text-[#333333] focus:outline-none focus:ring-0"
                        placeholder="Email..."
                    />
                </div>
                <div>
                    <textarea
                        className="border-[6px] border-solid  border-[#EA523C1A] rounded-[32px] bg-white p-[25px] w-full text-[20px] leading-[25.34px] placeholder:text-[#333333] focus:outline-none focus:ring-0 "
                        rows="5"
                        placeholder="How can we help you..."
                    />
                </div>
                <div className="flex justify-center pt-[30px]">
                    <MyButton className="px-[86px]">Submit</MyButton>
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
        <div className="max-w-[1920px] mx-auto">
            <div className="px-[103px] py-[103px] pb-[140px]">
                <div className="grid grid-cols-12 gap-[97px]">
                    <div className="col-span-6">
                        <ContactUs />
                    </div>

                    <div className="col-span-6">
                        {/* FAQ Section */}
                        <div>
                            <p className="font-Akkurat font-normal text-[45px] leading-[57.01px]">FAQs</p>
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
