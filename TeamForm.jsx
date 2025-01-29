import React, { useState } from 'react';

function TeamForm({ addTeam }) {
    const [teamName, setTeamName] = useState('');
    const [players, setPlayers] = useState([
        { name: '', jerseyNumber: '' },
        { name: '', jerseyNumber: '' },
        { name: '', jerseyNumber: '' },
        { name: '', jerseyNumber: '' },
        { name: '', jerseyNumber: '' },
    ]);

    const handlePlayerChange = (index, event) => {
        const newPlayers = [...players];
        newPlayers[index][event.target.name] = event.target.value;
        setPlayers(newPlayers);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTeam = { teamName, players };
        addTeam(newTeam);
        // Reset form
        setTeamName('');
        setPlayers([
            { name: '', jerseyNumber: '' },
            { name: '', jerseyNumber: '' },
            { name: '', jerseyNumber: '' },
            { name: '', jerseyNumber: '' },
            { name: '', jerseyNumber: '' },
        ]);
    };

    const handleCancel = () => {
        addTeam(null); // This will close the form without adding a team
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="teamName">
                    Team Name:
                </label>
                <input
                    id="teamName"
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter team name"
                />
            </div>
            <h3 className="text-lg font-semibold mb-3">Players:</h3>
            {players.map((player, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center mb-4">
                    <div className="flex-1 mr-2">
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor={`playerName${index}`}>
                            Player {index + 1} Name:
                        </label>
                        <input
                            id={`playerName${index}`}
                            type="text"
                            name="name"
                            value={player.name}
                            onChange={(e) => handlePlayerChange(index, e)}
                            required
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            placeholder={`Enter name for player ${index + 1}`}
                        />
                    </div>
                    <div className="flex-1 mt-2 md:mt-0">
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor={`jerseyNumber${index}`}>
                            Jersey Number:
                        </label>
                        <input
                            id={`jerseyNumber${index}`}
                            type="number"
                            name="jerseyNumber"
                            value={player.jerseyNumber}
                            onChange={(e) => handlePlayerChange(index, e)}
                            required
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="e.g., 10"
                        />
                    </div>
                </div>
            ))}
            <div className="flex justify-between mt-6">
                <button
                    type="submit"
                    className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
                >
                    Submit
                </button>
                <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default TeamForm;
