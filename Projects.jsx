import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import portfolio from '../assets/portfolio.png'
import Weather from '../assets/Weather.png'
import signup from '../assets/signup.png'
import game from '../assets/game.png'
import Netflix from '../assets/netflix.png'
import ecommerce from '../assets/ecommerce.png'
import otp from '../assets/otp.png'

const Projects = ({ darkModeFirst }) => {

  const projects = [
    {
      id: 1,
      title: 'Animated Portfolio',
      desc: 'Modern animated portfolio using React & Tailwind.',
      image: portfolio,
      tags: ['React', 'Tailwind', 'Framer Motion']
    },
    {
      id: 2,
      title: 'Weather App',
      desc: 'Weather app using API integration.',
      image: Weather,
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 3,
      title: 'Netflix Clone',
      desc: 'Responsive Netflix UI clone.',
      image: Netflix,
      tags: ['React', 'Tailwind']
    },
    {
      id: 4,
      title: 'Tic Tac Toe',
      desc: 'Simple JS game.',
      image: game,
      tags: ['HTML', 'CSS', 'JS']
    },
    {
      id: 5,
      title: 'OTP Generator',
      desc: 'Random OTP generator.',
      image: otp,
      tags: ['HTML', 'CSS', 'JS']
    },
    {
      id: 6,
      title: 'Signup Form',
      desc: 'Responsive form UI.',
      image: signup,
      tags: ['HTML', 'CSS', 'Bootstrap']
    },
    {
      id: 7,
      title: 'E-commerce',
      desc: 'WordPress store.',
      image: ecommerce,
      tags: ['WordPress']
    }
  ]

  return (
    <section
      id='projects'
      style={{
        backgroundColor: darkModeFirst ? '#111827' : '#f9fafb'
      }}
      className='py-24'
    >
      <div className='container mx-auto px-4'>

        {/* Heading */}
        <div className='text-center mb-12' data-aos="fade-down">
          <h2
            className='text-3xl sm:text-4xl font-bold mb-3'
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
              Projects
            </span>
          </h2>

          <p
            className='max-w-xl mx-auto'
            style={{
              color: darkModeFirst ? '#d1d5db' : '#6b7280'
            }}
          >
            A showcase of my recent work
          </p>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className='group rounded-xl border transition-all duration-300 hover:-translate-y-3 hover:border-orange-500 hover:shadow-lg'
              style={{
                background: darkModeFirst
                  ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                  : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
              }}
            >

              {/* Image */}
              <div
                className='h-44 overflow-hidden rounded-t-xl'
                data-aos="zoom-in"
                data-aos-delay={index * 120}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </div>

              {/* Content */}
              <div className='p-4'>

                <h3
                  className='text-lg font-bold mb-2'
                  style={{
                    color: darkModeFirst ? 'white' : '#1f2937'
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className='text-sm mb-3'
                  style={{
                    color: darkModeFirst ? '#d1d5db' : '#6b7280'
                  }}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className='px-2 py-1 text-xs rounded-full'
                      style={{
                        backgroundColor: darkModeFirst ? '#374151' : '#f3f4f6',
                        color: darkModeFirst ? '#d1d5db' : '#4b5563'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className='flex gap-2'>
                  <a
                    href='#'
                    className='flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-lg'
                    style={{
                      backgroundColor: darkModeFirst ? '#374151' : '#f3f4f6',
                      color: darkModeFirst ? 'white' : '#374151'
                    }}
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href='#'
                    className='flex-1 flex items-center justify-center gap-2 px-3 py-2 text-white text-sm rounded-lg'
                    style={{
                      background: 'linear-gradient(to right, #f97316, #f59e0b)'
                    }}
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects