import React from 'react'
import html from '../assets/html.png'
import CSS from '../assets/CSS.png'
import javascript from '../assets/javascript.png'
import reactImg from '../assets/react.png'
import bootstrap from '../assets/bootstrap.png'
import wordpress from '../assets/wordpress.png'
import tailwind from '../assets/tailwind.png'
import canva from '../assets/canva.png'

const Skills = ({ darkModeFirst }) => {

  const skills = [
    { name: 'HTML', icon: html, level: 95, color: 'from-orange-500 to-amber-500' },
    { name: 'CSS', icon: CSS, level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: javascript, level: 88, color: 'from-yellow-500 to-orange-500' },
    { name: 'React', icon: reactImg, level: 85, color: 'from-cyan-500 to-blue-500' },
    { name: 'Bootstrap', icon: bootstrap, level: 92, color: 'from-purple-500 to-indigo-500' },
    { name: 'Tailwind CSS', icon: tailwind, level: 92, color: 'from-cyan-500 to-teal-500' },
    { name: 'WordPress', icon: wordpress, level: 92, color: 'from-blue-600 to-gray-500' },
    { name: 'Canva', icon: canva, level: 92, color: 'from-pink-500 to-purple-500' },
  ]

  return (
    <section
      id='skills'
      style={{
        backgroundColor: darkModeFirst ? '#111827' : '#f9fafb'
      }}
      className='py-16 relative overflow-hidden'
    >
      <div className='container px-5 py-10 mx-auto'>

        {/* Heading */}
        <div className='text-center mb-16' data-aos="fade-down">
          <h1
            className='sm:text-4xl text-3xl font-bold mb-4'
            style={{
              color: darkModeFirst ? 'white' : '#1f2937'
            }}
          >
            My{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Skills
            </span>
          </h1>

          <p
            className='text-lg max-w-2xl mx-auto'
            style={{
              color: darkModeFirst ? '#d1d5db' : '#4b5563'
            }}
          >
            My technical and creative skills showcase my ability to build modern and responsive designs.
          </p>
        </div>

        {/* Cards */}
        <div className='flex flex-wrap -m-4'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='p-4 lg:w-1/4 md:w-1/2 w-full'
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >

              <div
                className='h-full p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 group'
                style={{
                  background: darkModeFirst
                    ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                    : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                }}
              >

                {/* Icon + Name */}
                <div className='flex items-center mb-6'>
                  
                  <div className='w-20 h-20 rounded-xl p-3 flex items-center justify-center bg-gray-200 group-hover:scale-110 transition-transform duration-300'>

                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className={`object-contain ${
                        skill.name === 'CSS' || skill.name === 'JavaScript'
                          ? 'w-16 h-16 scale-150'   // 🔥 BIG ICON FIX
                          : 'w-14 h-14 scale-110'
                      }`}
                    />

                  </div>

                  <h3
                    className='text-xl font-bold ml-4'
                    style={{
                      color: darkModeFirst ? 'white' : '#1f2937'
                    }}
                  >
                    {skill.name}
                  </h3>

                </div>

                {/* Progress */}
                <div className='mb-2 flex justify-between'>
                  <span style={{ color: darkModeFirst ? '#d1d5db' : '#6b7280' }}>
                    Proficiency
                  </span>

                  <span
                    className='font-bold'
                    style={{
                      background: 'linear-gradient(to right, #f97316, #f59e0b)',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div
                  className='w-full rounded-full h-3 overflow-hidden'
                  style={{
                    backgroundColor: darkModeFirst ? '#374151' : '#e5e7eb'
                  }}
                >
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills