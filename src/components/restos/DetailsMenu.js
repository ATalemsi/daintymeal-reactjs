import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';


const DetailsMenu = () => {

    return (
        <div className="px-3 pt-3">
            <div className="d-flex item-aligns-center">
                <p className="font-weight-bold">Menu</p>
                <a className="small text-primary font-weight-bold ml-auto" href="#">View all <i className="feather-chevrons-right" /></a>
            </div>

            
        </div>

    )
};

export default DetailsMenu;