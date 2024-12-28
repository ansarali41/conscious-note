import Banner from '../components/home-components/banner';
import ContactUsAndFaq from '../components/home-components/ContactUsAndFaq';
import DaysOf from '../components/home-components/DaysOf';
import FollowAlong from '../components/home-components/FollowAlong';
import Footer from '../components/home-components/footer';
import HistoryMeetsAI from '../components/home-components/HistoryMeetsAI';
import NewCategory from '../components/home-components/NewCategory';
import Reviews from '../components/home-components/Reviews';

const HomePage = () => {
    return (
        <div className="bg-[#F6EFE5] overflow-x-hidden">
            <div className="max-w-[1920px] mx-auto">
                <Banner />
                <NewCategory />
                <HistoryMeetsAI />
                <DaysOf />
                <Reviews />
                <FollowAlong />
                <ContactUsAndFaq />
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;
