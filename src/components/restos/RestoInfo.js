import React, { useEffect } from "react";
import RestoDetails from "./RestoDetails";
import RestoPlats from "./RestoPlats";
import RestoHeader from "./RestoHeader";


const RestoInfo = () => {


    return (
        <div className="osahan-restaurant-detail">
            <RestoHeader />
            <div className="mt-12">
            <RestoDetails />
            </div>
            
            <RestoPlats />
        </div>
    );

};

export default RestoInfo;