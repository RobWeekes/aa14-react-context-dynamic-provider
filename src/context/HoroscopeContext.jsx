import { createContext, useState } from 'react';
import horoscopesObj from '../data/horoscopes';

export const HoroscopeContext = createContext();

export function HoroscopeProvider(props) {
  const [currentSign, setCurrentSign] = useState('Sagittarius');
  console.log('currentSign:', currentSign);
  const sign = horoscopesObj[currentSign];
  // console.log('sign from HoroscopeContext:', sign);
  // 'sign' should be an object assigned to current astro sign from useState above
  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  )
}
