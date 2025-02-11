import { createContext, useState } from 'react';

export const HoroscopeContext = createContext();

export function HoroscopeProvider(props) {
  const [currentSign, setCurrentSign] = useState({sign: 'Capricorn'});

  return (
    <HoroscopeContext.Provider value={{ currentSign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  )
}
