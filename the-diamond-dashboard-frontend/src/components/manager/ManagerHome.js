import React, { useState, useEffect } from 'react';
import { getManagerList } from '../../services/ManagerService';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

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
      <p>
        <Link to={"/manager/add"}>voeg manager toe</Link>
      </p>
      <table class="table">
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Club Name
            </th>
          </tr>
        </thead>
        <tbody>
        {managers.map(manager => (
          <tr>
            <td key={manager.id}>{manager.name}</td>
            <td>{manager.clubName}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerList;