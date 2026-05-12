import React, { useState } from 'react';

export default function ParticipantForm({ events, onAddParticipant }) {
  const [formData, setFormData] = useState({
    participantName: '',
    email: '',
    eventName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.participantName || !formData.email || !formData.eventName) {
      alert('Please fill all fields');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email');
      return;
    }

    onAddParticipant({
      ...formData,
      id: Date.now()
    });

    setFormData({
      participantName: '',
      email: '',
      eventName: '',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Register Participant</h2>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Participant Name *
          </label>
          <input
            type="text"
            name="participantName"
            value={formData.participantName}
            onChange={handleChange}
            placeholder="Enter participant name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email ID *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Event Name *
          </label>
          <select
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select an event</option>
            {events.map(event => (
              <option key={event.id} value={event.eventName}>
                {event.eventName}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          ➕ Register Participant
        </button>
      </form>
    </div>
  );
}
