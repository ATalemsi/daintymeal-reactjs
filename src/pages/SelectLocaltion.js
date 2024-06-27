import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import Maps from "../components/Maps";
import Search from "../components/Search";

const libraries = ["places"];

const SelectLocation = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBYo-N_FzEPsdTeydQFbFRfxeLzs1y9yEM',
    libraries,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <>
      <div class="osahan-country">
        <Search />
        <Maps />
      </div>



    </>
  );
};

export default SelectLocation;
