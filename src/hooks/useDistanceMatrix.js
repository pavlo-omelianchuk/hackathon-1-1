// const { distance, duration } = useDistanceMatrix(pickup, dropoff);
import { useState, useEffect } from "react";

export default function useDistanceMatrix(pickup, dropoff, isReadyToGetRide) {
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [carbonFootprint, setCarbonFootprint] = useState(null);
  useEffect(() => {
    if (!pickup || !dropoff || !isReadyToGetRide) {
      return;
    }
    const fetchDistanceMatrix = async () => {
      const url = `https://hackathon-1-1.netlify.app/.netlify/functions/hack?origins=${pickup}&destinations=${dropoff}`;

      try {
        const response = await fetch(url);
        const { distance, duration, carbonFootprint } = await response.json();
        setDistance(distance);
        setDuration(duration);
        setCarbonFootprint(carbonFootprint);
      } catch (error) {
        console.error("Error fetching the Distance Matrix:", error);
      }
    };

    fetchDistanceMatrix();
  }, [pickup, dropoff, isReadyToGetRide]);

  return { distance, duration, carbonFootprint };
}
