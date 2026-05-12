import React from 'react';
import { motion } from 'framer-motion';

export default function Dashboard({ events, participants }) {

  const totalEvents = events.length;

  const upcomingEvents = events.filter(
    (e) => e.status === 'Upcoming'
  ).length;

  const completedEvents = events.filter(
    (e) => e.status === 'Completed'
  ).length;

  const totalParticipants = participants.length;

  const StatCard = ({
    title,
    count,
    icon,
    gradient,
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        rotate: 1,
      }}
      className={`p-8 rounded-3xl shadow-2xl text-white ${gradient}`}
    >
      <div className="flex justify-between items-center">

        <div>
          <p className="uppercase tracking-widest text-sm opacity-80">
            {title}
          </p>

          <h2 className="text-5xl font-black mt-3">
            {count}
          </h2>
        </div>

        <div className="text-6xl opacity-80">
          {icon}
        </div>

      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-slate-100 via-purple-100 to-indigo-100 p-10"
    >

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">

          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-black text-gray-800 mb-3"
          >
            Welcome Back 👋
          </motion.h1>

          <p className="text-xl text-gray-600">
            Manage your events and participants beautifully.
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          <StatCard
            title="Total Events"
            count={totalEvents}
            icon="🎯"
            gradient="bg-gradient-to-r from-blue-500 to-cyan-500"
          />

          <StatCard
            title="Upcoming"
            count={upcomingEvents}
            icon="🚀"
            gradient="bg-gradient-to-r from-green-500 to-emerald-500"
          />

          <StatCard
            title="Completed"
            count={completedEvents}
            icon="✅"
            gradient="bg-gradient-to-r from-purple-500 to-fuchsia-500"
          />

          <StatCard
            title="Participants"
            count={totalParticipants}
            icon="👥"
            gradient="bg-gradient-to-r from-orange-500 to-pink-500"
          />

        </div>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-14 bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/40"
        >

          <h2 className="text-3xl font-black text-gray-800 mb-8">
            Quick Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="bg-gradient-to-r from-blue-100 to-cyan-100 p-8 rounded-2xl"
            >

              <p className="text-gray-600 text-lg">
                Upcoming Events
              </p>

              <h3 className="text-5xl font-black text-blue-700 mt-3">
                {upcomingEvents}
              </h3>

            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl"
            >

              <p className="text-gray-600 text-lg">
                Total Registrations
              </p>

              <h3 className="text-5xl font-black text-purple-700 mt-3">
                {totalParticipants}
              </h3>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </motion.div>
  );
}