import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import { useSelector } from "react-redux";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const Map = () => {
  const [tripDuration, setTripDuration] = useState(null);
  const [tripInstructions, setTripInstructions] = useState([]);
  const rideData = useSelector((state) => state.rideReducer);
  const { dropoff, pickup } = rideData;
  const pickupLocation = pickup;
  const dropoffLocation = dropoff;

  const getCoordinates = async (location) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapboxgl.accessToken}`;
    const result = await axios.get(url);
    return result.data.features[0].center;
  };

  const getDirection = async (pickupLocation, dropoffLocation) => {
    const pickupCoordinates = await getCoordinates(pickupLocation);
    const dropoffCoordinates = await getCoordinates(dropoffLocation);

    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=${mapboxgl.accessToken}`;
    const result = await axios.get(url);

    const route = result.data.routes[0];
    const duration = Math.round(route.duration / 60);
    setTripDuration(duration);

    const instructions = route.legs[0].steps.map(
      (step) => step.maneuver.instruction
    );
    instructions.push("You have arrived at your destination");
    setTripInstructions(instructions);

    return route.geometry;
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [76.6413, 10.1632],
      zoom: 7,
    });

    map.on("load", async () => {
      const bounds = new mapboxgl.LngLatBounds();

      if (pickupLocation && dropoffLocation) {
        const routeGeometry = await getDirection(
          pickupLocation,
          dropoffLocation
        );
        const routeLayer = {
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: routeGeometry,
            },
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#888",
            "line-width": 8,
          },
        };
        map.addLayer(routeLayer);
      }

      if (pickupLocation) {
        const pickupCoordinates = await getCoordinates(pickupLocation);
        addToMap(map, pickupCoordinates);
        bounds.extend(pickupCoordinates);
      }

      if (dropoffLocation) {
        const dropoffCoordinates = await getCoordinates(dropoffLocation);
        addToMap(map, dropoffCoordinates);
        bounds.extend(dropoffCoordinates);
      }

      addBoundsToMap(map, bounds);
    });

    return () => {
      map.remove();
    };
  }, [pickupLocation, dropoffLocation]);

  const addToMap = (map, coordinates) => {
    const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
    const bounds = new mapboxgl.LngLatBounds();
    bounds.extend(coordinates);
    map.fitBounds(bounds, { padding: 20 });
  };

  const addBoundsToMap = (map, bounds) => {
    map.fitBounds(bounds, { padding: 20 });
  };

  return (
    <div className="flex p-10 gap-10 sm:flex-col md:flex-row justify-center ">
      {tripDuration && (
        <div className="bg-white rounded-lg pl-2">
          <div className="flex justify-center pb-10">
            <h1 className=" underline text-center pt-4">follow up</h1>
          </div>

          <p className="ps-5">Trip duration: {tripDuration} minutes</p>
          <ol className="pb-5">
            {tripInstructions.map((instruction, index) => (
              <li className="ps-5" key={index}>
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="md:w-8/12 sm:w-full h-96 rounded-lg" id="map"></div>
    </div>
  );
};

export default Map;
