import React from "react";
import RestoInfo from "../components/restos/RestoInfo";
import DetailsMenu from "../components/restos/DetailsMenu";
import Navbar from '../components/Navbar';


const RestoShow = () => {
    return (
        <div className="osahan-restaurant">
            <RestoInfo />
            <DetailsMenu />
            <Navbar />
        </div>
    );

};

export default RestoShow;