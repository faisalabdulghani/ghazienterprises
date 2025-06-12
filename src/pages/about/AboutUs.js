import Team from "../../components/team/Team";
import VisionMissionSection from "../../components/visionmission/VisionMission";
import { FaBullseye } from "react-icons/fa";

const AboutUs = () => {
    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                <VisionMissionSection
                    icon={<FaBullseye />}
                    title="MISSION"
                    text="Our mission is to provide value-driven solutions through innovation and collaboration."
                    color="#ff4500"
                />

                <VisionMissionSection
                    icon={<FaBullseye />}
                    title="VISION"
                    text="To become a global leader in sustainable and cutting-edge technology."
                    color="#007acc"
                />
            </div>

            <Team />
        </>
    );
};

export default AboutUs;
