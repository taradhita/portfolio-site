const Hero = () => {
  return (
    <section className="py-40 bg-white dark:bg-gray-800 h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="md:w-2/3 lg:w-2/3 sm:w-full px-4 py-8 md:py-16 lg:py-24">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-mono dark:text-white mb-4">Hi, I'm Tara. 👋 </h1>
            <p className="text-md md:text-l lg:text-xl mb-2 font-thin font-mono dark:text-gray-300">
              I am a back-end developer based in Bali, Indonesia. 
            </p>
            <p className="text-md md:text-l lg:text-xl mb-2 font-thin font-mono dark:text-gray-300">
              Currently what I do is building scalable applications at Timedoor Indonesia. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero