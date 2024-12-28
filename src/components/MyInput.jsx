const MyInput = ({ type = 'text', placeholder, value, onChange, className = '', rows }) => {
    if (type === 'textarea') {
        return (
            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={rows} // Set the number of rows here
                className={`border-[3px] md:border-[6px] border-solid border-[#EA523C12] rounded-[22px] md:rounded-[32px] bg-white py-[10px] px-[25px] md:py-[25px] md:px-[25px] w-full text-[20px] leading-[25.34px] placeholder:text-[#333333] focus:outline-none focus:ring-0 ${className}`}
            />
        );
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border-[3px] md:border-[6px] border-solid border-[#EA523C12] rounded-[555px] bg-white py-[10px] px-[25px] md:py-[25px] md:px-[25px] w-full text-[20px] leading-[25.34px] placeholder:text-[#333333] focus:outline-none focus:ring-0 ${className}`}
        />
    );
};

export default MyInput;
