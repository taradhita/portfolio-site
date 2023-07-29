import Button from "../Button"

const ContactPage = () => {
    return (
    <section id="contact" className="bg-white dark:bg-gray-800 py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono mb-4 text-gray-900 dark:text-gray-300">Contact Me</h2>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg font-mono mb-8 ">Feel free to reach out to me for any inquiries or collaborations on <a href="">Linkedin</a>, Github, or Instagram. Or shoot me a message below.</p>
        <form action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-mono">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light font-mono" placeholder="name@email.com" required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-mono">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 border-2 border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light font-mono " placeholder="What do you want to talk about?" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-mono">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border-2 border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 font-mono" placeholder="Leave a message here..."></textarea>
          </div>
          <div className="flex justify-center">
            <Button type="submit" text="Send message" />
          </div>
      </form>
      </div>
    </section>
    )
}

export default ContactPage