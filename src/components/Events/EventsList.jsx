import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function EventsList({
  events,
  onDeleteEvent,
  onMarkComplete,
}) {

  const [search, setSearch] = useState('');

  const filteredEvents = events.filter((event) =>
    event.eventName
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (events.length === 0) {
    return (
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 text-center">

        <h2 className="text-3xl font-black text-gray-700 mb-3">
          No Events Yet 🚀
        </h2>

        <p className="text-gray-500 text-lg">
          Create your first amazing event.
        </p>

      </div>
    );
  }

  return (
    <div className="w-full">

      {/* SEARCH */}

      <div className="mb-8">

        <input
          type="text"
          placeholder="🔍 Search Events..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full p-5 rounded-2xl border-2 border-gray-200 focus:border-purple-500 shadow-lg bg-white"
        />

      </div>

      {/* EVENTS GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-20">

        {filteredEvents.map((event, index) => (

          <motion.div
            key={event.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            whileHover={{
              scale: 1.03,
              y: -5,
            }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/30"
          >

            {/* TOP */}

            <div className="flex justify-between items-start mb-6">

              <h2 className="text-2xl font-black text-gray-800">
                {event.eventName}
              </h2>

              <span
                className={`px-4 py-2 rounded-full text-sm font-bold ${
                  event.status === 'Upcoming'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-purple-100 text-purple-700'
                }`}
              >
                {event.status}
              </span>

            </div>

            {/* DETAILS */}

            <div className="space-y-4 text-gray-700 mb-8">

              <p className="text-lg">
                📅 {event.date}
              </p>

              <p className="text-lg">
                📍 {event.venue}
              </p>

              <p className="text-lg">
                👤 {event.organizer}
              </p>

            </div>

            {/* BUTTONS */}

            <div className="flex gap-3">

              {event.status === 'Upcoming' && (

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() =>
                    onMarkComplete(event.id)
                  }
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg"
                >
                  ✅ Complete
                </motion.button>
              )}

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() =>
                  onDeleteEvent(event.id)
                }
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-bold shadow-lg"
              >
                🗑 Delete
              </motion.button>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}