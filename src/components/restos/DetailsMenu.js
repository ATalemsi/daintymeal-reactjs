import React from "react";
import Menu from "./Menu";
import Rating from "./Rating";
import Review from "./Review";


const DetailsMenu = () => {

    return (
        <div className="px-3 pt-3">
            <div className="d-flex item-aligns-center">
                <p className="font-weight-bold">Menu</p>  
            </div>
          <Menu />
          <Review />
        </div>

    )
};

export default DetailsMenu;