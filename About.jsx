import about from '../assets/about.png'

const About = ({ darkModeFirst }) => {

  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 ${
        darkModeFirst ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

        {/* Image */}
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            
            {/* Star Shape Background */}
            <div
              className="absolute -inset-10 lg:-inset-20 bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#f97316] star-shape rotate-12 z-0"
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>

            <img
              src={about}
              alt="About"
              className="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-300 rounded-xl"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>

        {/* Content */}
        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left relative order-1 lg:order-2"
        >
          <header>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>

          <p
            className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed bg-gradient-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm ${
              darkModeFirst ? 'text-gray-300' : 'text-gray-700'
            }`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            I am a passionate Graphic Designer and Web Developer who loves creating modern, responsive, and visually appealing designs. I enjoy turning ideas into reality using design tools and code.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">

            

            <div className="text-center" data-aos="zoom-in" data-aos-delay="700">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                10+
              </div>
              <div className={`${darkModeFirst ? 'text-gray-300' : 'text-gray-600'}`}>
                Projects
              </div>
            </div>

            <div className="text-center" data-aos="zoom-in" data-aos-delay="800">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                1+
              </div>
              <div className={`${darkModeFirst ? 'text-gray-300' : 'text-gray-600'}`}>
                Experience
              </div>
            </div>

          </div>

          {/* Button */}
          <button
            className={`w-full sm:w-auto inline-flex items-center justify-center border-2 border-orange-500 bg-transparent py-2 sm:px-6 rounded-full text-base font-semibold hover:bg-orange-500 hover:text-white hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.7)] transition-all duration-300 transform
            ${darkModeFirst 
            ? 'text-white bg-orange-500/10'
            : 'text-gray-800 bg-white/90'}`}
                data-aos = 'fade-up'
                data-aos-delay = ' 800'
          >
            Learn More
          </button>

        </article>

      </div>
    </section>
  )
}

export default About