import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import SelectCountry from "../components/SelectCountry";

const SelectLocation = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
      } );
      if (!isLoaded) return <div>Loading...</div>;
      return <SelectCountry />;

};

export default SelectLocation;