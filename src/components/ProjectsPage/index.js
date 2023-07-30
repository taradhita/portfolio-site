import Card from "../Card";
import projects from "../../data/projects.json"

const sortDescProject = [...projects].sort((previous, next) => next.id - previous.id);

const ProjectsPage = () => {
  return (
    <section id="projects" className="bg-white dark:bg-gray-800 py-10 md:py-16 w-full min-h-screen">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono dark:text-gray-300 mb-4">Projects</h2>
        <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sortDescProject.map(project => (
            <Card project={project}/>
          ))}
        </div>
      </div>
    </section>
  )    
}

export default ProjectsPage