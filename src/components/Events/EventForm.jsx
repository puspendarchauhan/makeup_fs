import React, { useState } from 'react';

export default function EventForm({ onAddEvent }) {

  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    venue: '',
    organizer: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddEvent({
      ...formData,
      id: Date.now(),
      status: 'Upcoming',
    });

    setFormData({
      eventName: '',
      date: '',
      venue: '',
      organizer: '',
    });
  };

  return (
    <div className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10 mb-10 border border-white/40">

      <h2 className="text-4xl font-black text-gray-800 mb-8">
        Create New Event
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-6"
      >

        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={formData.eventName}
          onChange={handleChange}
          className="p-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 outline-none"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="p-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 outline-none"
        />

        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={formData.venue}
          onChange={handleChange}
          className="p-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 outline-none"
        />

        <input
          type="text"
          name="organizer"
          placeholder="Organizer"
          value={formData.organizer}
          onChange={handleChange}
          className="p-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 outline-none"
        />

        <button
          className="md:col-span-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-[1.02] transition-all duration-300 text-white py-4 rounded-2xl font-bold text-lg shadow-xl"
        >
          ✨ Add Event
        </button>

      </form>
    </div>
  );
}