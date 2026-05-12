import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const navLink = (path) =>
    location.pathname === path
      ? 'bg-white text-purple-700 shadow-lg'
      : 'text-white hover:bg-white/20';

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-r from-purple-700 via-violet-700 to-indigo-700 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-wide text-white flex items-center gap-3"
          >
            ✨ EventSphere
          </Link>

          <div className="flex gap-4">
            <Link
              to="/"
              className={`px-5 py-2 rounded-full transition-all duration-300 font-semibold ${navLink('/')}`}
            >
              Dashboard
            </Link>

            <Link
              to="/events"
              className={`px-5 py-2 rounded-full transition-all duration-300 font-semibold ${navLink('/events')}`}
            >
              Events
            </Link>

            <Link
              to="/participants"
              className={`px-5 py-2 rounded-full transition-all duration-300 font-semibold ${navLink('/participants')}`}
            >
              Participants
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}