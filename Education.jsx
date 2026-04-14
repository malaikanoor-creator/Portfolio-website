import React from 'react'

const Education = ({ darkModeFirst }) => {

  const education = [
    {
      id: 1,
      degree: "BS Islamic Studies",
      institute: "University of the Punjab, Lahore",
      year: "2021 - 2025",
      desc: "Completed BS Islamic Studies from University of the Punjab, Lahore, with focus on research, classical Islamic texts and modern interpretations."},
    {
      id: 2,
      degree: "FSc Pre-Medical",
      institute: "Aspire Group Of College",
      year: "2019 - 2021",
      desc: "Studied Biology, Chemistry and Physics with strong academic performance and conceptual learning."
    },
    {
      id: 3,
      degree: "Matriculation (Science)",
      institute: "The Educators",
      year: "2017-2019",
      desc: "Completed matriculation with Biology as major subject and strong science foundation."
    }
  ]

  return (
    <section
      id="education"
      style={{
        backgroundColor: darkModeFirst ? '#0b1220' : '#f8fafc'
      }}
      className="py-24 relative"
    >

      <div className="container mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{
              color: darkModeFirst ? 'white' : '#1f2937'
            }}
          >
            My{' '}
            <span style={{
              background: 'linear-gradient(to right, #f97316, #f59e0b)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>
              Education
            </span>
          </h2>

          <p
            className="mt-3"
            style={{
              color: darkModeFirst ? '#cbd5e1' : '#6b7280'
            }}
          >
            My academic journey and qualifications
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-orange-500 ml-4">

          {education.map((item, index) => (
            <div
              key={item.id}
              className="mb-12 ml-8 relative"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >

              {/* Glow Dot */}
              <span className="absolute -left-11 top-2 w-5 h-5 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50 animate-pulse"></span>

              {/* Card */}
              <div
                className="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/20"
                style={{
                  background: darkModeFirst
                    ? 'linear-gradient(135deg, #1f2937, #111827)'
                    : 'linear-gradient(135deg, #ffffff, #f3f4f6)',
                  borderColor: darkModeFirst ? '#374151' : '#e5e7eb'
                }}
              >

                <h3
                  className="text-xl font-bold mb-1"
                  style={{
                    color: darkModeFirst ? 'white' : '#1f2937'
                  }}
                >
                  {item.degree}
                </h3>

                <p className="text-orange-500 font-medium">
                  {item.institute}
                </p>

                <span
                  className="text-sm block mt-1 mb-3"
                  style={{
                    color: darkModeFirst ? '#94a3b8' : '#6b7280'
                  }}
                >
                  {item.year}
                </span>

                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: darkModeFirst ? '#cbd5e1' : '#4b5563'
                  }}
                >
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Education