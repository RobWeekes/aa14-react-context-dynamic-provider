import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

const Detail = () => {
  // const horoscopesObj = useContext(HoroscopeContext);
  const { sign } = useContext(HoroscopeContext);
  console.log('sign from Detail:', sign);
  return (
    <div className='details'>
      <img
        src={sign.backgroundImg}
        alt={sign.name}
      />
      <h2>{sign.name}</h2>
      <h4>{sign.element}</h4>
      <h4>{sign.traits}</h4>
    </div>
  );
};

export default Detail;
