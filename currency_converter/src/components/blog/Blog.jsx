import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


const Blog = () => {
  const [records, setRecords] = useState({});

  useEffect(() => {
    fetch("https://api.currencyapi.com/v3/latest?apikey=fca_live_mny47Rjms5CVRwVkmjTwmfTapeDWW3RKS9EVbgna")
      .then(res => res.json())
      .then(data => setRecords(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {Object.entries(records.data || {}).map(([currency, { value }]) => (
        <div key={currency}>
          {currency}: {value}
        </div>
      ))}
    </div>
  );
};


export default Blog;