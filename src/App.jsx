import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';

import EventForm from './components/Events/EventForm';
import EventsList from './components/Events/EventsList';

import ParticipantForm from './components/Participants/ParticipantForm';
import ParticipantsList from './components/Participants/ParticipantsList';

import './App.css';

// Events Page
function EventsPage({
  events,
  onAddEvent,
  onDeleteEvent,
  onMarkComplete,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-purple-100 to-indigo-100 p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black text-gray-800 mb-10">
          Event Management
        </h1>

        <EventForm onAddEvent={onAddEvent} />

        <EventsList
          events={events}
          onDeleteEvent={onDeleteEvent}
          onMarkComplete={onMarkComplete}
        />

      </div>

    </div>
  );
}

// Participants Page
function ParticipantsPage({
  events,
  participants,
  onAddParticipant,
  onDeleteParticipant,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-purple-100 to-indigo-100 p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black text-gray-800 mb-10">
          Participant Management
        </h1>

        <ParticipantForm
          events={events}
          onAddParticipant={onAddParticipant}
        />

        <ParticipantsList
          participants={participants}
          onDeleteParticipant={onDeleteParticipant}
        />

      </div>

    </div>
  );
}

export default function App() {

  // Load from localStorage
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const [participants, setParticipants] = useState(() => {
    const savedParticipants = localStorage.getItem('participants');
    return savedParticipants
      ? JSON.parse(savedParticipants)
      : [];
  });

  // Save events
  useEffect(() => {
    localStorage.setItem(
      'events',
      JSON.stringify(events)
    );
  }, [events]);

  // Save participants
  useEffect(() => {
    localStorage.setItem(
      'participants',
      JSON.stringify(participants)
    );
  }, [participants]);

  // Add Event
  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  // Delete Event
  const handleDeleteEvent = (eventId) => {

    const deletedEvent = events.find(
      (e) => e.id === eventId
    );

    setEvents(
      events.filter(
        (event) => event.id !== eventId
      )
    );

    // Remove related participants
    setParticipants(
      participants.filter(
        (p) =>
          p.eventName !== deletedEvent?.eventName
      )
    );
  };

  // Mark Complete
  const handleMarkComplete = (eventId) => {

    setEvents(
      events.map((event) =>
        event.id === eventId
          ? {
              ...event,
              status: 'Completed',
            }
          : event
      )
    );
  };

  // Add Participant
  const handleAddParticipant = (
    newParticipant
  ) => {

    setParticipants([
      ...participants,
      newParticipant,
    ]);
  };

  // Delete Participant
  const handleDeleteParticipant = (
    participantId
  ) => {

    setParticipants(
      participants.filter(
        (p) => p.id !== participantId
      )
    );
  };

  return (
    <Router>

      <div className="min-h-screen">

        <Navigation />

        <Routes>

          <Route
            path="/"
            element={
              <Dashboard
                events={events}
                participants={participants}
              />
            }
          />

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