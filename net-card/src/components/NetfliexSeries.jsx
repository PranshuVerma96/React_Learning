import React from "react";
import SeriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
export const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {SeriesData.map((data) => (<SeriesCard key={data.id} data= {data}/>
      
      ))}
    </ul>
  );
};

// export default NetflixSeries;
