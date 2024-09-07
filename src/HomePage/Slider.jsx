import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Link } from 'react-router-dom';

const sliderValues = [
    { value: 0, package_value: 20, text: 'Choose what your conscious mind feels right about1', link: 'google.com1' },
    { value: 25, package_value: 25, text: 'Choose what your conscious mind feels right about2', link: 'google.com2' },
    { value: 50, package_value: 30, text: 'Choose what your conscious mind feels right about3', link: 'google.com3' },
    { value: 75, package_value: 40, text: 'Choose what your conscious mind feels right about4', link: 'google.com4' },
    { value: 100, package_value: 50, text: 'Choose what your conscious mind feels right about5', link: 'google.com5' },
];

const marks = [
    { value: 0, label: '' },
    { value: 25, label: '' },
    { value: 50, label: '' },
    { value: 75, label: '' },
    { value: 100, label: '' },
];

export default function SliderComponent() {
    const [value, setValue] = useState(50);

    // Handle slider value change
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };
    // Get the current slider data based on the value
    const currentSlideData = sliderValues.find(slide => slide.value === value);

    // Calculate the left position dynamically
    const leftPosition = `${value + 4}% !important`;
    const newWidth = `${value + 7}% !important`;
    return (
        <div>
            <div className="flex justify-center py-5">
                <p className="text-[28px] font-bold text-brand-gray text-center">
                    <span className="text-[40px] font-bold leading-[55px] text-brand-orange">${currentSlideData?.package_value}</span>/month
                </p>
            </div>

            <div className="flex justify-center">
                <Box sx={{ width: 250 }}>
                    <Slider
                        aria-label="Custom Styled Slider"
                        value={value} // Bind state to slider value
                        onChange={handleSliderChange} // Handle changes
                        step={25}
                        marks={marks}
                        sx={{
                            '& .MuiSlider-track': {
                                backgroundColor: '#FE8522', // Active track color (orange)
                                height: 35, // Height of the track
                                border: 'none',
                                marginLeft: '-11px',
                                borderRadius: '20px 0px 0px 20px',
                                width: newWidth, // Apply dynamic width
                            },
                            '& .MuiSlider-rail': {
                                color: '#fff8f0', // Inactive track color (lighter orange)
                                opacity: 1, // Ensure the rail is fully visible
                                height: 35, // Height of the rail
                                width: 290,
                                marginLeft: '-11px',
                                borderRadius: '20px',
                            },
                            // Customize the thumb (the circle that moves)
                            '& .MuiSlider-thumb': {
                                width: 50, // Thumb width
                                height: 50, // Thumb height
                                backgroundColor: '#FE8522', // Thumb color (orange)
                                border: '4px solid white', // White border around the thumb
                                boxShadow: 'none',
                                '&:hover, &:focus, &.Mui-active,': {
                                    // boxShadow: '0 0 0 8px rgba(249, 115, 22, 0.16)', // Add shadow on hover/focus
                                    boxShadow: 'none !important',
                                },
                                position: 'relative',
                                left: leftPosition, // Apply dynamic left position
                            },
                            // Customize the dots
                            '& .MuiSlider-mark': {
                                backgroundColor: '#FFCA9F', // Color of the dots
                                height: 20, // Height of the dots
                                width: 20, // Width of the dots
                                borderRadius: '50%', // Make dots round
                                '&.MuiSlider-markActive': {
                                    backgroundColor: '#FFCA9F', // Active dot color
                                },
                            },
                        }}
                    />
                </Box>
            </div>

            <div className="pt-6 pb-5 md:pt-10 md:pb-5">
                <p className="text-[20px] font-medium leading-[25px] text-center text-brand-gray px-10">
                    We’re a small self-funded team crafting this app because <br className="hidden md:block" />
                    we believe people deserve to think without limits.
                </p>
                <p className="text-[30px] leading-[30px] md:text-[35px] font-bold md:leading-[45px] text-center text-brand-orange py-5 px-8">{currentSlideData?.text}</p>
            </div>

            <div className="flex justify-center">
                <Link to={`/${currentSlideData?.link}`}>
                    <button className="w-[218px] h-[50px] rounded-[6px] border-[1px] border-[#F0F0F0] bg-[#3B3734] text-white shadow-[0px_0px_4px_1px_#0000000D] font-medium text-[18px] leading-[15px] hover:bg-black">
                        Get access now
                    </button>
                </Link>
            </div>
        </div>
    );
}
