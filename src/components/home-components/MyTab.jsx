import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

const defaultTheme = createTheme({
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    color: '#666666', // Default text color
                    '&.Mui-selected': {
                        color: '#EA523C', // Active text color
                        borderBottom: '2px solid #EA523C', // Underline color
                        marginBottom: '-2px',
                    },
                    padding: '20px 20px',
                    textTransform: 'none',
                    fontFamily: 'Akkurat',
                    fontSize: '24px',
                },
            },
        },
    },
});

const MyTab = ({ tabs, theme = defaultTheme, tabStyles, panelStyles, defaultValue = '1' }) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: '2px solid white', width: '97%', marginBottom: '-5px' }}>
                        <TabList onChange={handleChange} aria-label="customizable tabs">
                            {tabs.map(tab => (
                                <Tab
                                    key={tab.value}
                                    sx={{
                                        ...tabStyles,
                                        [theme.breakpoints.down('md')]: {
                                            fontSize: '16px',
                                        },
                                    }}
                                    label={tab.label}
                                    value={tab.value}
                                />
                            ))}
                        </TabList>
                    </Box>
                    {tabs.map(
                        tab =>
                            tab?.component && (
                                <TabPanel key={tab.value} value={tab.value} className="bg-white rounded-md" sx={panelStyles}>
                                    {tab.component}
                                </TabPanel>
                            ),
                    )}
                </TabContext>
            </Box>
        </ThemeProvider>
    );
};

export default MyTab;
