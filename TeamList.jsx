import React from 'react';

function TeamList({ teams }) {
    return (
        <div className="max-w-3xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Teams</h2>
            {teams.length === 0 && <p className="text-center text-gray-600">No teams added yet.</p>}
            <div className="space-y-4">
                {teams.map((team, index) => (
                    <div key={index} className="bg-white p-6 rounded shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-blue-500">{team.teamName}</h3>
                        <ul className="list-disc list-inside">
                            {team.players.map((player, idx) => (
                                <li key={idx} className="text-gray-700">
                                    {player.name} - <span className="font-medium">#{player.jerseyNumber}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamList;
