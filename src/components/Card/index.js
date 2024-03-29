import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Card = ({project}) => {
  return (
    <div className="bg-white p-6 md:p-8 border-2 border-black  dark:border-primary-300  dark:bg-primary-900 shadow-[10px_10px_0px_0px_rgba(0,0,0)] dark:shadow-[10px_10px_0px_0px_rgba(209,213,219)]">
      <h3 className="text-lg md:text-xl font-display font-bold mb-2 dark:text-primary-300">{project.name}</h3>
      <div className='py-2'>
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" title='Github' className="text-primary-800 dark:text-primary-200 hover:underline hover:text-primary-400 hover:dark:text-primary-600 mr-2">
            <FontAwesomeIcon icon={faGithub} size='lg' />
          </a>
        )}
        {project.websiteLink && (
          <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" title='Website' className="text-primary-800 dark:text-primary-200 hover:underline hover:text-primary-400 hover:dark:text-primary-600">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg'/>
          </a>
        )}
      </div>
      <p className="text-primary-500 text-base mb-4 font-display">{project.description}</p>
      <div className="flex items-center justify-between">
        <ul className="flex flex-wrap text-sm font-display leading-6mb-2">
          {project.techStack.map((tech) => (
            <li key={tech} 
              className= "bg-primary-200 mr-2 px-3 py-1 mb-3 rounded-full text-primary-800"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Card