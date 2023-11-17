import React, { useState } from 'react';
import { addManager } from '../../services/ManagerService';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const ManagerCreate = ({}) => {
    const [name, setName] = useState('');
    const [clubName, setClubName] = useState('');

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleClubNameChange = event => {
        setClubName(event.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const newManager = await addManager(name, clubName);

            if (newManager) {
                //onManagerAdded(newManager);
                alert('Manager toegevoegd!');
                setName('');
                setClubName('');
            }
        } catch (error) {
            console.error('Fout bij het toevoegen van een manager: ', error);
        }
    };

    return (
        <div>
            <h2>Voeg een nieuwe manager toe</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Naam:<br />
                    <input type='text' value={name} onChange={handleNameChange} />
                </label>
                <br />
                <br />
                <label>
                    Clubnaam:<br />
                    <input type='text' value={clubName} onChange={handleClubNameChange} />
                </label>
                <br />
                <br />
                <button type='submit'>Toevoegen</button>
                <Link to={"/manager"}>terug</Link>
            </form>
        </div>
    );
};

export default ManagerCreate;