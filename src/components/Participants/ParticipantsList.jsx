import React from 'react';

export default function ParticipantsList({ participants, onDeleteParticipant }) {
  if (participants.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <p className="text-gray-500 text-lg">No participants registered yet. Register your first participant!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-gray-800 p-6 bg-gray-50 border-b">
        Participants List
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Participant Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Event Name</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {participants.map((participant) => (
              <tr key={participant.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-800 font-medium">{participant.participantName}</td>
                <td className="px-6 py-4 text-gray-600">{participant.email}</td>
                <td className="px-6 py-4 text-gray-600">{participant.eventName}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => onDeleteParticipant(participant.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors inline-flex items-center gap-2"
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 px-6 py-4 border-t">
        <p className="text-sm text-gray-600">
          Total Participants: <span className="font-bold text-gray-800">{participants.length}</span>
        </p>
      </div>
    </div>
  );
}
