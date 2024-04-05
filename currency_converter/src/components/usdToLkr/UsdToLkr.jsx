import React, { useEffect, useState } from 'react';
import './usdToLkr.css';

const UsdToLkr = () => {
  const [records, setRecords] = useState({});

  useEffect(() => {
    fetch("https://api.currencyapi.com/v3/latest?apikey=fca_live_mny47Rjms5CVRwVkmjTwmfTapeDWW3RKS9EVbgna")
      .then(res => res.json())
      .then(data => setRecords(data))
      .catch(err => console.log(err));
  }, []);

  const currencies = {
    0: 'USD',
    1: 'LKR',
    2: 'EUR',
    3: 'CHF',
    4: 'KWD',
    5: 'BHD',
    6: 'OMR',
    7: 'SAR',
    8: 'QAR',
    9: 'BND',
    10: 'INR',
    11: 'PKR',
    12: 'AED',
  };

  const getcurrencyValue = (currency) => {
    const currencycode = currencies[currency];
    if (records && records.data && records.data[currencycode]) {
      return records.data[currencycode].value.toFixed(2);
    }
    return null;
  };

  return (
    <div className='maindiv' id='usdLkr'>
      <div className='row'>
        <div className='container'>
          <div className='items'>
            <h1>{currencies[0]}  to LKR</h1>
            <h3>exchange rate</h3>
            <h1>{getcurrencyValue(1)}</h1>
          </div>
        </div>
        <div className='container'>
          <div className='items'>
            <h1>{currencies[2]}  to LKR</h1>
            <h3>exchange rate</h3>
            <h1>{(getcurrencyValue(1) / getcurrencyValue(2)).toFixed(2)}</h1>
          </div>
        </div>
        <div className='container'>
          <div className='items'>
            <h1>{currencies[3]}  to LKR</h1>
            <h3>exchange rate</h3>
            <h1>{(getcurrencyValue(1) / getcurrencyValue(3)).toFixed(2)}</h1>
          </div>
        </div>
        <div className='container'>
          <div className='items'>
            <h1>{currencies[4]} to LKR</h1>
            <h3>exchange rate</h3>
            <h1>{(getcurrencyValue(1) / getcurrencyValue(4)).toFixed(2)}</h1>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='container'>
          <div className='items'>
            <h1>{currencies[8]}  to LKR</h1>
            <h3>exchange rate</h3>
            <h1>{(getcurrencyValue(1) / getcurrencyValue(8)).toFixed(2)}</h1>
          </div>
        </div>
        <div className='container'>
          <div className='items'>
            <h1>{currencies[5]}  to LKR</h1>
            <h3>exchange rate</h3>
            <h1>{(getcurrencyValue(1) / getcurrencyValue(5)).toFixed(2)}</h1>
          </div>
        </div>
        <div className='container'>
          <div className='items'>
            <h1>{currencies[6]}  to LKR</h1>
            <h3>exchange rate</h3>
            <h1>{(getcurrencyValue(1) / getcurrencyValue(6)).toFixed(2)}</h1>
          </div>
        </div>
        <div className='container'>
          <div className='items'>
            <h1>{currencies[7]}  to LKR</h1>
            <h3>exchange rate</h3>
            <h1>{(getcurrencyValue(1) / getcurrencyValue(7)).toFixed(2)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsdToLkr;
