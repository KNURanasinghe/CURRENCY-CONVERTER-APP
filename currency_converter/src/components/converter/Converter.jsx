import React, { useEffect, useState } from 'react';
import './converter.css';

const Converter = () => {
  const [records, setRecords] = useState({});
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');

  useEffect(() => {
    fetch("https://api.currencyapi.com/v3/latest?apikey=fca_live_mny47Rjms5CVRwVkmjTwmfTapeDWW3RKS9EVbgna")
      .then(res => res.json())
      .then(data => {
        // Extracting currency codes from the data object
        const currencyCodes = Object.keys(data.data);
  
        // Logging currency codes to the console
        console.log(currencyCodes);
      })
      .catch(err => console.log(err));
  }, []);
    
  
  
  
  

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const handleConversion = () => {
    // Perform currency conversion using API or any other method
    // For demo purposes, just setting a random value
    // You can calculate the conversion rate here
    // const conversionRate = 1.5; // Example conversion rate
    // const result = (Math.random() * 100).toFixed(2) * conversionRate;
    // alert(`Conversion result: ${result}`);
  };

  return (
    <div className='converter-container' id='converter'>
      <h2>Currency Converter</h2>
      <div className='selection'>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {Object.keys(records.rates || {}).map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        <button onClick={handleSwap}><p>&#8596;</p></button>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {Object.keys(records.rates || {}).map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <div className='convert'>
        <button onClick={handleConversion}>Convert</button>
      </div>
      <div className='text'>
        <p>Conversion result will be displayed here</p>
      </div>
    </div>
  );
}

export default Converter;
