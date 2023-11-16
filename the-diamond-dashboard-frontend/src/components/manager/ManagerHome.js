import React, { useState, useEffect } from 'react';
import { getManagerList } from '../../services/ManagerService';

const ManagerList = () => {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    const fetchManagers = async () => {
      try {
        const data = await getManagerList();
        setManagers(data);
      } catch (error) {
        console.error('Fout bij het ophalen van de gegevens: ', error);
      }
    };

    fetchManagers();
  }, []);

  return (
    <div>
      <h2>Managerlijst</h2>
      <ul>
        {managers.map(manager => (
          <li key={manager.id}>{manager.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManagerList;