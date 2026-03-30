import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomePage = () => {
  // Stages: tracing -> highlight -> main
  const [stage, setStage] = useState('tracing'); 

  useEffect(() => {
    // 1. Trace brain (2.5s) -> 2. Highlight Play (1s) -> 3. Enter Site
    const timer1 = setTimeout(() => setStage('highlight'), 2500);
    const timer2 = setTimeout(() => setStage('main'), 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Animation Variants for the Neural Trace
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 2, ease: "easeInOut" } 
    }
  };

  const featuresRow1 = [
    { title: 'Course Curator', desc: 'AI picks the single best video.' },
    { title: 'Quiz Generator', desc: 'Adaptive questions with explanations.' },
    { title: 'Notes Generator', desc: 'Live summaries and key concepts.' },
    { title: 'Course Curator', desc: 'AI picks the single best video.' },
    { title: 'Quiz Generator', desc: 'Adaptive questions with explanations.' },
  ];

  const featuresRow2 = [
    { title: 'Revision Scheduler', desc: 'Smart reminders for retention.' },
    { title: 'Update Acknowledger', desc: 'Stay updated within 48 hours.' },
    { title: 'Premium Features', desc: 'Unlock full learning power.' },
    { title: 'Revision Scheduler', desc: 'Smart reminders for retention.' },
    { title: 'Update Acknowledger', desc: 'Stay updated within 48 hours.' },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0B3954] overflow-x-hidden font-serif">
      
      {/* 1. OPENING ANIMATION */}
      <AnimatePresence mode="wait">
        {(stage === 'tracing' || stage === 'highlight') && (
          <motion.div
            key="intro-overlay"
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-80 h-80 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* TRACED BRAIN OUTLINE */}
                <motion.path
                  d="M50,85 C30,85 15,70 15,50 C15,30 30,15 50,15 C70,15 85,30 85,50 C85,60 80,75 70,85 L65,95 L55,85"
                  stroke="#0B3954"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
                
                {/* NEURAL NETWORK CONNECTIONS */}
                <motion.path
                  d="M25,40 L45,30 M25,40 L35,60 M35,60 L50,75 M70,40 L55,30 M70,40 L75,65 M75,65 L55,75"
                  stroke="#0B3954"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                />

                {/* THE DOTS (Nodes) */}
                {[ {x:25,y:40}, {x:45,y:30}, {x:35,y:60}, {x:55,y:30}, {x:70,y:40}, {x:75,y:65}, {x:50,y:75} ].map((dot, i) => (
                  <motion.circle
                    key={i}
                    cx={dot.x} cy={dot.y} r="2.5"
                    fill="#0B3954"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + (i * 0.1) }}
                  />
                ))}

                {/* THE PLAY BUTTON */}
                <motion.path
                  d="M42,40 L62,50 L42,60 Z"
                  fill={stage === 'highlight' ? "#0B3954" : "none"}
                  stroke="#0B3954"
                  strokeWidth="2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: stage === 'highlight' ? 1.1 : 1,
                    fill: stage === 'highlight' ? "#0B3954" : "rgba(11,57,84,0)"
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* THE STAR SPARKLE */}
                <motion.path
                  d="M78,25 L80,32 L87,34 L80,36 L78,43 L76,36 L69,34 L76,32 Z"
                  fill="#0B3954"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: stage === 'highlight' ? 1 : 0, 
                    scale: stage === 'highlight' ? 1 : 0 
                  }}
                />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN CONTENT */}
      {stage === 'main' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          
          {/* HEADER - PROPORTIONAL & CLEAN */}
          <header className="fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-10 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="flex items-center">
              <div className="h-14 w-auto">
                <img 
                  src="/logo.jpeg" 
                  alt="logo" 
                  className="h-full w-full object-contain mix-blend-multiply" 
                />
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <button className="text-xs font-bold tracking-[0.2em] text-[#0B3954] hover:opacity-50 transition-all uppercase">LOG IN</button>
              <button className="px-8 py-2.5 bg-[#0B3954] text-white rounded-full text-xs font-bold tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-md">
                SIGN UP
              </button>
            </div>
          </header>

          {/* HERO */}
          <section className="h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-7xl md:text-9xl font-serif text-black mb-4">
              Welcome to <br />
              <span className="font-light italic text-[#0B3954]">CourseCraft</span>
            </h1>
            <p className="text-lg md:text-xl tracking-[0.3em] uppercase text-gray-400 font-light">
              Skip the scroll. <span className="text-black font-medium">Learn the goal</span>
            </p>
          </section>

          {/* FEATURES SECTION */}
          <section className="py-24 bg-[#0B3954] text-white overflow-hidden">
            <div className="mb-16 px-10">
              <h2 className="text-4xl font-serif text-white/90">Tailored Experience</h2>
            </div>

            {/* ROW 1: Right to Left */}
            <div className="flex mb-10 overflow-hidden">
              <motion.div 
                className="flex space-x-6 px-6"
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {featuresRow1.map((f, idx) => (
                  <div key={idx} className="min-w-[400px] h-64 p-10 bg-white/5 border border-white/10 rounded-3xl flex flex-col justify-end">
                    <h3 className="text-2xl font-medium mb-2">{f.title}</h3>
                    <p className="text-white/60">{f.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ROW 2: Left to Right */}
            <div className="flex overflow-hidden">
              <motion.div 
                className="flex space-x-6 px-6"
                animate={{ x: [-1000, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {featuresRow2.map((f, idx) => (
                  <div key={idx} className="min-w-[400px] h-64 p-10 bg-white/5 border border-white/10 rounded-3xl flex flex-col justify-end">
                    <h3 className="text-2xl font-medium mb-2">{f.title}</h3>
                    <p className="text-white/60">{f.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          <footer className="h-40 flex flex-col items-center justify-center border-t border-gray-100 bg-white">
            <div className="h-10 mb-4 mix-blend-multiply opacity-50">
               <img src="/logo.jpeg" alt="footer-logo" className="h-full object-contain" />
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
};

export default WelcomePage;