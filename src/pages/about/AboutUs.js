import Team from "../../components/team/Team";
import VisionMissionSection from "../../components/visionmission/VisionMission";

const AboutUs = () => {
    return (
        <>
            <VisionMissionSection
                heading={'Our Mission'}
                text={'Our mission is to deliver superior construction and contracting services that exceed our clients expectations. We are dedicated to continuous improvement and adopting the latest technologies to enhance our service delivery.'}
            />
            <VisionMissionSection
                heading={'Our Vision'}
                text={'At GEC, our vision is to be the leading provider of construction and contracting services in Saudi Arabia, recognized for our innovation, quality, and commitment to excellence.'}
            />
            <Team />
        </>
    );
};

export default AboutUs;
