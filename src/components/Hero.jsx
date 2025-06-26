
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import reactLogo from "../assets/React.png";
import tailwind from "../assets/Tailwind Css.png";
import Github from "../assets/Github.jsx"
import CV from "../assets/DibyenduPanja.RESUME.pdf"

const Hero = () => {
  return (
    <section className="relative">
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi, I'm
              <br />
              <span className="text-red-500 ">DibyenduPanja</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Full Stack Web Developer</p>
            <p className="mb-4">
              Passionate Full-Stack Developer specializing in the MERN stack,
              with expertise in building scalable, high-performance web
              applications. I create smooth front-end experiences and reliable
              back-end systems, often with real-time features. Always curious,
              always building—turning ideas into real, working products.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              <a
                href={CV}
                download
                target="_blank"
              >
                Download CV
              </a>
            </button>
          </div>
          <div className="md:w-3/4 relative flex justify-center items-end">
           
            <img
              src={reactLogo}
              alt=""
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            
            <img
              src={tailwind}
              alt=""
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-20 right-8 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        <a href="https://www.facebook.com/share/1UguptBUG8/" target="_blank">
          <img src={facebook} alt="" className="w-20" />
        </a>
        <a href="https://www.instagram.com/rdp_s2000?igsh=c3BmYjY4NXNhaXJ6" target="_blank">
        <img src={instagram} alt="" className="w-20" />
        </a>
        <a href="https://github.com/Dibyendupanja" target="_blank">
                <Github/>
        </a>
        <a  href="https://www.linkedin.com/in/dibyendupanja/" target="_blank">
        <img src={linkedin} alt="" className="w-20" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
