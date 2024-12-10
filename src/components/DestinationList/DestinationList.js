import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./DestinationList.css";
import { addDestination } from "../../store/destinationsSlice";

const DestinationList = () => {
  const destinations = useSelector((state) => state.destinations.list);
  const dispatch = useDispatch();

  const toggleVisited = (id) => {
    const updatedDestinations = destinations.map((destination) =>
      destination.id === id
        ? { ...destination, visited: !destination.visited }
        : destination
    );
    dispatch(addDestination(updatedDestinations));
  };

  return (
    <div className="destination-list">
      <h2>Your Destinations</h2>
      {destinations.length === 0 ? (
        <p className="no-destinations">No destinations added yet!</p>
      ) : (
        <ul>
          {destinations.map((destination) => (
            <li key={destination.id} className="destination-item">
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
              <p>
                <strong>Best Time to Visit:</strong> {destination.bestTime}
              </p>
              <button
                className={`toggle-visited ${
                  destination.visited ? "visited" : "not-visited"
                }`}
                onClick={() => toggleVisited(destination.id)}
              >
                {destination.visited ? "Visited" : "Not Visited"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DestinationList;
