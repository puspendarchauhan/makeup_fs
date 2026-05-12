import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';

import EventForm from './components/Events/EventForm';
import EventsList from './components/Events/EventsList';

import ParticipantForm from './components/Participants/ParticipantForm';
import ParticipantsList from './components/Participants/ParticipantsList';

import './App.css';

/* =========================
   EVENTS PAGE
========================= */

function EventsPage({
  events,
  onAddEvent,
  onDeleteEvent,
  onMarkComplete,
}) {
  return (
    <div className="w-full min-h-screen overflow-y-auto bg-gradient-to-br from-slate-100 via-purple-100 to-indigo-100 p-10">

      <div className="max-w-7xl mx-auto">

        <div className="mb-10">

          <h1 className="text-5xl font-black text-gray-800 mb-3">
            Event Management 🚀
          </h1>

          <p className="text-lg text-gray-600">
            Create and manage all your events beautifully.
          </p>

        </div>

        <EventForm onAddEvent={onAddEvent} />

        <div className="mt-10">
          <EventsList
            events={events}
            onDeleteEvent={onDeleteEvent}
            onMarkComplete={onMarkComplete}
          />
        </div>

      </div>

    </div>
  );
}

/* =========================
   PARTICIPANTS PAGE
========================= */

function ParticipantsPage({
  events,
  participants,
  onAddParticipant,
  onDeleteParticipant,
}) {
  return (
    <div className="w-full min-h-screen overflow-y-auto bg-gradient-to-br from-slate-100 via-purple-100 to-indigo-100 p-10">

      <div className="max-w-7xl mx-auto">

        <div className="mb-10">

          <h1 className="text-5xl font-black text-gray-800 mb-3">
            Participant Management 👥
          </h1>

          <p className="text-lg text-gray-600">
            Register and manage participants easily.
          </p>

        </div>

        <ParticipantForm
          events={events}
          onAddParticipant={onAddParticipant}
        />

        <div className="mt-10">
          <ParticipantsList
            participants={participants}
            onDeleteParticipant={onDeleteParticipant}
          />
        </div>

      </div>

    </div>
  );
}

/* =========================
   MAIN APP
========================= */

export default function App() {

  const [events, setEvents] = useState([]);

  const [participants, setParticipants] = useState([]);

  /* =========================
     EVENT FUNCTIONS
  ========================= */

  const handleAddEvent = (newEvent) => {

    setEvents((prev) => [
      ...prev,
      newEvent,
    ]);
  };

  const handleDeleteEvent = (eventId) => {

    const deletedEvent = events.find(
      (event) => event.id === eventId
    );

    setEvents((prev) =>
      prev.filter(
        (event) => event.id !== eventId
      )
    );

    // Remove related participants
    setParticipants((prev) =>
      prev.filter(
        (participant) =>
          participant.eventName !==
          deletedEvent?.eventName
      )
    );
  };

  const handleMarkComplete = (eventId) => {

    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId
          ? {
              ...event,
              status: 'Completed',
            }
          : event
      )
    );
  };

  /* =========================
     PARTICIPANT FUNCTIONS
  ========================= */

  const handleAddParticipant = (
    newParticipant
  ) => {

    setParticipants((prev) => [
      ...prev,
      newParticipant,
    ]);
  };

  const handleDeleteParticipant = (
    participantId
  ) => {

    setParticipants((prev) =>
      prev.filter(
        (participant) =>
          participant.id !== participantId
      )
    );
  };

  /* =========================
     RETURN
  ========================= */

  return (

    <Router>

      <div className="w-full min-h-screen overflow-x-hidden">

        {/* NAVBAR */}

        <Navigation />

        {/* ROUTES */}

        <Routes>

          {/* DASHBOARD */}

          <Route
            path="/"
            element={
              <Dashboard
                events={events}
                participants={participants}
              />
            }
          />

          {/* EVENTS */}

          <Route
            path="/events"
            element={
              <EventsPage
                events={events}
                onAddEvent={handleAddEvent}
                onDeleteEvent={handleDeleteEvent}
                onMarkComplete={handleMarkComplete}
              />
            }
          />

          {/* PARTICIPANTS */}

          <Route
            path="/participants"
            element={
              <ParticipantsPage
                events={events}
                participants={participants}
                onAddParticipant={
                  handleAddParticipant
                }
                onDeleteParticipant={
                  handleDeleteParticipant
                }
              />
            }
          />

        </Routes>

      </div>

    </Router>
  );
}