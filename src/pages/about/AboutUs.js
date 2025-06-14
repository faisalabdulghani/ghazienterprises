import Team from "../../components/team/Team";
import VisionMissionSection from "../../components/visionmission/VisionMission";
import './style.css'

const AboutUs = () => {
    return (
        <div className="aboutus-page">
            <div className="our-story-header">
                {/* <h1 className="our-story-heading">Our Story</h1>
                <h2 className="our-story-subheading">Excellence Built on Innovation</h2>
                <p className="our-story-description">
                    Ghazi Enterprises Company LTD (GEC) is a dynamic, Jeddah-based leader in construction, contracting, and integrated infrastructure solutions. Established in 2024, we combine cutting-edge technology with decades of expertise to deliver exceptional services from heavy equipment rental and logistics to electrical power, asphalt works, and material supply.
                </p>
                <p className="our-story-description">
                    What sets GEC apart is our unwavering commitment to precision and client satisfaction. Backed by a seasoned management team, we execute projects with efficiency, transparency, and a relentless focus on quality. Whether it’s groundbreaking construction or seamless logistics, we build trust through results.
                </p> */}
            </div>
            <VisionMissionSection />
            <Team />
        </div>
    );
};

export default AboutUs;
