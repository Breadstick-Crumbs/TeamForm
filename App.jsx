import React, { useState } from 'react';
import TeamForm from './TeamForm';
import TeamList from './TeamList';
// Remove the import for App.css if it's no longer needed
// import './App.css';

function App() {
  const [teams, setTeams] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addTeam = (team) => {
    if (team) {
      setTeams([...teams, team]);
    }
    setShowForm(false);
  };

  const createNewTeam = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Team Manager</h1>
      {!showForm && (
        <div className="flex justify-center mb-6">
          <button
            onClick={createNewTeam}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Add a Team
          </button>
        </div>
      )}
      {showForm && <TeamForm addTeam={addTeam} />}
      <TeamList teams={teams} />
    </div>
  );
}

export default App;
