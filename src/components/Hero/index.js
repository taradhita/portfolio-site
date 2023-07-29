import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";

const socials = [
  {name: 'github', link: 'https://github.com/taradhita', logo: faGithub},
  {name: 'linkedin', link: 'https://linkedin.com/in/nadiataradhita', logo: faLinkedinIn},
  {name: 'instagram', link: 'https://instagram.com/taradhita', logo: faInstagram}
]

const Hero = () => {
  return (
    <section className="py-40 bg-white dark:bg-gray-800 h-screen">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-wrap">
          {/* DUMMY IMAGE */}
          <div className="md:w-1/3 lg:w-1/3 sm:w-full px-4 py-4 md:py-8 lg:py-16">
            <div className="flex flex-wrap justify-center">
              <div className="w-10/12 sm:w-8/12">
                <Image src="/image/profile.jpg" width="800" height="800" alt="..." className="rounded-full max-w-full h-auto align-middle border-4 border-solid border-gray-800 dark:border-gray-200 shadow-[5px_5px_0px_0px_rgba(31,41,55)] dark:shadow-[5px_5px_0px_0px_rgba(229,231,235)]"></Image>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 lg:w-2/3 sm:w-full px-4 py-8 md:py-16 lg:py-24">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-mono dark:text-white mb-4">Hi, I'm Tara. 👋 </h1>
            <p className="text-md md:text-l lg:text-xl mb-2 font-thin font-mono dark:text-gray-300">
              I am a back-end developer based in Bali, Indonesia. 
            </p>
            <p className="text-md md:text-l lg:text-xl mb-2 font-thin font-mono dark:text-gray-300">
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
            <div className="flex mt-6">
              {socials.map((social) => {
                return(
                  <a href={social.link} className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-full focus:shadow-outline hover:bg-gray-800">
                  <FontAwesomeIcon icon={social.logo} className="w-5 h-5" size="xl"/>
              </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero