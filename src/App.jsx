import { useState, useEffect } from 'react';
import * as API from './services/launches';
import './App.css';

export function App() {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <h1>SpaceX launches</h1>
      <ul>
        {launches.map((launches) => (
          <li key={launches.flight_number}>
            {launches.mission_name} ({launches.launch_year})
          </li>
        ))}
      </ul>
    </>
  );
}
