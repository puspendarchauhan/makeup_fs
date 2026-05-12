import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navigation() {

  const location = useLocation();

  const navItems = [
    {
      name: 'Dashboard',
      path: '/',
      icon: '🏠',
    },
    {
      name: 'Events',
      path: '/events',
      icon: '🎯',
    },
    {
      name: 'Participants',
      path: '/participants',
      icon: '👥',
    },
  ];

  return (

    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 shadow-xl border-b border-white/30">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          {/* LOGO */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
          >

            <Link
              to="/"
              className="text-3xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
            >
              📅 Event Dashboard
            </Link>

          </motion.div>

          {/* NAVIGATION */}

          <div className="flex items-center gap-3">

            {navItems.map((item) => {

              const isActive =
                location.pathname === item.path;

              return (

                <motion.div
                  key={item.name}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >

                  <Link
                    to={item.path}
                    className={`relative px-6 py-3 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl'
                        : 'text-gray-700 hover:bg-purple-100'
                    }`}
                  >

                    <span>
                      {item.icon}
                    </span>

                    <span>
                      {item.name}
                    </span>

                    {/* ACTIVE GLOW */}

                    {isActive && (

                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 -z-10"
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 25,
                        }}
                      />

                    )}

                  </Link>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </nav>
  );
}