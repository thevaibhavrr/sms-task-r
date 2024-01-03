'use client'

import { useEffect, useState } from 'react';

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
   
  }, []);

  return (
    <div>
      <h1>Show Schools</h1>
      <div>
        {schools.map((school) => (
          <div key={school.id}>
            <img src={`/${school.image}`} alt={school.name} />
            <p>Name: {school.name}</p>
            <p>Address: {school.address}</p>
            <p>City: {school.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSchools;
