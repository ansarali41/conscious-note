import rightArrow from '../assets/icons/right-arrow.svg';

const MyButton = ({ children, className = '', onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ background: 'linear-gradient(180deg, #FF9680 0%, #EA523C 76.5%)' }}
            className={`font-Akkurat font-normal text-[18px] leading-[11px] md:text-[20px] md:leading-[25.34px] px-[21px]  md:px-[34px] py-[8.5px] md:py-[13px] rounded-[555px] text-white flex items-center justify-center ${className}`}
        >
            {children}
            <img src={rightArrow} alt="" className="pl-[14px]" />
        </button>
    );
};

export default MyButton;
