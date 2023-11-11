import Button from "../Button";
import experiences from "../../data/experiences.json"
import PageTransition from "../PageTransition";
import { forwardRef, useRef } from "react";

const redirectClick = () => {
  const externalURL = 'https://drive.google.com/file/d/1Z-tFAbP_HO4aM3qd9ghW7m1LE0GfV4YJ/view?usp=drive_link'
  window.open(externalURL, '_blank')
}

const ExperiencePage  = () => {
  const transitionRef = useRef(null)

  return (
    <section id="experience" className="bg-primary-100 dark:bg-primary-900 px-5 md:px-10 py-10 md:py-20 w-full min-h-screen">
      <PageTransition ref={transitionRef}>
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display dark:text-primary-300 mb-4">Experience</h1>
          <ol className="relative border-l border-primary-200 dark:border-primary-700">
            {experiences.map((experience) => {
              return (
                <li key={experience.id} className="mb-10 ml-4" >
                  <div className="absolute w-3 h-3 bg-primary-200 rounded-full mt-1.5 -left-1.5 border border-primary-50 dark:border-primary-900 dark:bg-primary-700"></div>
                  <time className="mb-1 text-sm font-normal font-display leading-none text-primary-400 dark:text-primary-500">{experience.duration}</time>
                  <h3 className="text-lg font-semibold font-display text-primary-900 dark:text-primary-50">{experience.company}</h3>
                  <h5 className="font-display text-ml text-primary-800 dark:text-primary-200">{experience.title}</h5>
                  <ul className="space-y-1 mt-2 text-primary-500 list-disc list-inside dark:text-primary-400 font-display">
                    {experience.description.map((description, index) => {
                      return(
                        <li key={index}>{description}</li>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
          </ol>
          <div className="flex justify-center">
            <Button text="Download resume" onClick={redirectClick}/>
          </div>
        </div>
      </PageTransition>
    </section>  
  )
}

export default forwardRef(ExperiencePage)