import React, { createContext, useContext, useState } from 'react';

const CityContext = createContext();

export function CityProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [key, setKey] = useState('');

  const updateLocation = (newCity) => {
    setSelectedLocation(newCity);
  };

  const updateKey = (newKey) => {
    setKey(newKey);
  };

  return (
    <CityContext.Provider value={{ selectedLocation, updateLocation, key, updateKey}}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  return useContext(CityContext);
}
