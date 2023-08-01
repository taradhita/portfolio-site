const AboutPage = () => {
  const paragraphStyle = "text-gray-600 dark:text-gray-400 text-base md:text-lg font-mono mb-8"

  return (
    <section id="about" className="bg-white dark:bg-gray-800 px-5 md:px-10 py-10 md:py-20 w-full min-h-screen">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="py-5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono dark:text-gray-300 mb-4">About Me</h1>
          <p className={paragraphStyle}>
          Hello! You can call me <b>Tara</b> for short. I am a passionate back-end developer with two years of professional experience in creating robust and efficient applications.
          </p>
          <p className={paragraphStyle}>My first exposure to coding was in my high school when I started customizing HTML themes on my Tumblr page. Fast forward since then, I graduated with a Bachelor of Information Technology degree from Udayana University and currently I am developing and maintaining services for numerous clients across the country as a back end developer at Timedoor Indonesia.</p>
          <p className={paragraphStyle}>
          When I am not coding, I enjoy vinyl collecting, trying out street foods, getting buried into piles of unread books, annoying my nephew at home, or occassionally swimming at the beach. 
          </p>
          <p className={paragraphStyle}>If you want to say hello, just drop me a message to taradhita[at]gmail[dot]com. </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage