import Card from "../Card";

const ProjectsPage = () => {
  const projects = [
    {
      name: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum et purus in fringilla. Nullam at orci vitae mi vehicula fermentum.',
      techStack: ['Tech1', 'Tech2', 'Tech3', 'Tech4', 'Tech5'],
      githubLink: 'https://github.com/project1',
      websiteLink: 'https://project1website.com',
    },
    {
      name: 'Project 2',
      description: 'Praesent interdum, purus eu hendrerit efficitur, risus enim tincidunt nisi, et ullamcorper nulla arcu id risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      techStack: ['Tech4', 'Tech5', 'Tech6'],
      githubLink: 'https://github.com/project2',
      websiteLink: '',
    },
    {
      name: 'Project 3',
      description: 'Maecenas et suscipit nisl. In ut tincidunt turpis. Sed ullamcorper arcu eros, vitae fringilla velit feugiat a. Nam vel dui nec nisi accumsan vehicula ac a urna.',
      techStack: ['Tech7', 'Tech8', 'Tech9'],
      githubLink: 'https://github.com/project3',
      websiteLink: '',
    },
  ];

  return (
    <section id="projects" className="bg-white dark:bg-gray-800 py-10 md:py-16 w-full min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono dark:text-gray-300 mb-4">Projects</h2>
        {/* maybe next i might put a front end filter for tech stack here (multi keyword) */}
        <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map(project => (
            <Card project={project}/>
          ))}
        </div>
      </div>
    </section>
  )    
}

export default ProjectsPage