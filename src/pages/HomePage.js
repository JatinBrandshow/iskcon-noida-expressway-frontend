"use client";

import ContactUS from "@/components/ContactUS";
import DarshanTimings from "@/components/DarshanTimings";
import LiveDarshan from "@/components/LiveDarshan";
import MainSection from "@/components/MainSection";
import OurServices from "@/components/OurServices";
import ServiceOpportunities from "@/components/ServiceOpportunities";
import TempleConstructionProject from "@/components/TempleConstructionProject";
import TempleConstructionSection from "@/components/TempleConstructionSection";
import TempleDailyActivities from "@/components/TempleDailyActivities";
import TempleDailyProgram from "@/components/TempleDailyProgram";
import TempleDonation from "@/components/TempleDonation";
import TempleEvents from "@/components/TempleEvents";
import TempleGallery from "@/components/TempleGallery";
import TempleLocation from "@/components/TempleLocation";
import TempleProject from "@/components/TempleProject";
import TempleVolunteerSection from "@/components/TempleVolunteerSection";
import React from "react";

const HomePage = () => {
    return (
        <>
            <MainSection />
            <DarshanTimings />
            <TempleDailyActivities />
            <TempleProject />
            <TempleEvents />
            <TempleGallery />
            <LiveDarshan />
            <TempleDailyProgram />
            <TempleConstructionProject />
            <TempleVolunteerSection />
            <TempleConstructionSection />
            <TempleLocation />
            <TempleDonation />
            <ServiceOpportunities />
            <OurServices />
            <ContactUS />
        </>
    );
};

export default HomePage;
