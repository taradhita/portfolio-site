import Card from "../Card";
import projects from "../../data/projects.json"
import { forwardRef, useRef } from "react";
import PageTransition from "../PageTransition";

const sortDescProject = [...projects].sort((previous, next) => next.id - previous.id);

const ProjectsPage = () => {
  const transitionRef = useRef(null)
  
  return (
    <section id="projects" className="bg-primary-100 dark:bg-primary-900 px-5 md:px-10 py-10 md:py-20 w-full min-h-screen">
      <PageTransition ref={transitionRef}>
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display dark:text-primary-300 mb-4">Projects</h2>
          <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sortDescProject.map(project => (
              <Card project={project} key={project.id}/>
            ))}
          </div>
        </div>

      </PageTransition>
    </section>
    
  )    
}

export default forwardRef(ProjectsPage)