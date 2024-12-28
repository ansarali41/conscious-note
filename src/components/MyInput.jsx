const MyInput = ({ type = 'text', placeholder, value, onChange, className = '' }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border-[3px] md:border-[6px] border-solid border-[#EA523C1A] rounded-[555px] bg-white py-[10px] px-[25px] md:py-[25px] md:px-[25px] w-full text-[16px] leading-[20.34px] md:text-[20px] md:leading-[25.34px] placeholder:text-[#333333] focus:outline-none focus:ring-0 ${className}`}
        />
    );
};

export default MyInput;
