import React, { useState } from "react";

const Table = () => {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [error, setError] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedCity = city.trim();


    if (!trimmedCity) {
      setError("City name cannot be empty or just whitespace.");
      return;
    }
    if (cities.includes(trimmedCity.toLowerCase())) {
      setError("City has already been added.");
      return;
    }


    setCities([...cities, trimmedCity.toLowerCase()]);
    setCity("");
    setError("");
  };


  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="city-list">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="Enter city name"
            className="border p-2"
          />
          <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">
            Add City
          </button>
        </div>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <ul className="mt-4">
        {cities.map((cityItem, index) => (
          <li key={index}>{cityItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
