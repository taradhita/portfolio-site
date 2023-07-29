import Card from "../Card"

const skills = [
  {
    id: 1,
    parent: 'Programming Language',
    child: ['PHP', 'Javascript', 'Python'] 
  },
  {
    id: 2,
    parent: 'Back End',
    child: ['Laravel', 'Node.js', 'Express.js', 'Flask'] 
  },
  {
    id: 3,
    parent: 'Front End',
    child: ['React.js'] 
  },
  {
    id: 4,
    parent: 'Databases',
    child: ['MySQL', 'PostgreSQL'] 
  },
  {
    id: 5,
    parent: 'Other Tools',
    child: ['Git', 'AWS']
  }
]

const AboutPage = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-800 py-20 w-full min-h-screen">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="py-5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono dark:text-gray-300 mb-4">About Me</h1>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-ml font-mono mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus mattis mauris vel blandit. Maecenas tempus cursus sapien, a interdum nulla ornare vitae. Proin massa ligula, feugiat non arcu ac, ultrices tincidunt leo. Donec libero nisl, dapibus sit amet molestie vel, auctor non ante. Vivamus pulvinar quis sem vitae luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed faucibus justo nisl, vitae egestas nisl venenatis eget. Vivamus non tincidunt ex. Fusce egestas urna in cursus consectetur. Fusce ex augue, pretium sit amet sem at, auctor facilisis eros. Morbi ut orci vestibulum, facilisis lacus in, mattis urna. </p>
        </div>
        <div className="py-5">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-mono dark:text-gray-300 mb-4">Skills</h2>
          <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill) => {
            return (
              <div className="bg-white p-6 md:p-8 border-2 border-black dark:border-gray-300 dark:bg-gray-800 shadow-[10px_10px_0px_0px_rgba(0,0,0)] dark:shadow-[10px_10px_0px_0px_rgba(209,213,219)]">
                <h3 className="text-lg md:text-xl font-mono font-bold mb-2 dark:text-gray-300">{skill.parent}</h3>
                <ul className={`flex flex-wrap text-sm font-mono leading-6 ${skill.child.length < 3 ? 'mb-0' : 'mb-2'}`}>
                  {skill.child.map((child) => (
                    <li key={child} className="bg-gray-200 mr-2 px-3 py-1 mb-3 rounded-full max-w-max break-all text-gray-800">{child}</li>
                  ))}
                </ul>
              </div>
            );
          })}
          </div>          
        </div>
      </div>
    </section>
  )
}

export default AboutPage