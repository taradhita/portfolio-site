import Button from "../Button";

const ExperiencePage  = () => {
  const experiences = [
    {
      id: 1,
      company: 'ABC Tech Inc.',
      title: 'Backend Developer',
      duration: '2018 - Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis vitae sem sit amet vestibulum. Sed dictum et purus in fringilla. Nullam at orci vitae mi vehicula fermentum.',
    },
    {
      id: 2,
      company: 'XYZ Software Solutions',
      title: 'Software Engineer',
      duration: '2016 - 2018',
      description: 'Praesent interdum, purus eu hendrerit efficitur, risus enim tincidunt nisi, et ullamcorper nulla arcu id risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      id: 3,
      company: '123 Web Development Agency',
      title: 'Junior Developer',
      duration: '2015 - 2016',
      description: 'Maecenas et suscipit nisl. In ut tincidunt turpis. Sed ullamcorper arcu eros, vitae fringilla velit feugiat a. Nam vel dui nec nisi accumsan vehicula ac a urna.',
    },
  ];

  return (
    <section id="experience" className="bg-white dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono dark:text-gray-300 mb-4">Experience</h1>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {experiences.map((experience) => {
            return (
              <li key={experience.id} className="mb-10 ml-4" >
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal font-mono leading-none text-gray-400 dark:text-gray-500">{experience.duration}</time>
                <h3 className="text-lg font-semibold font-mono text-gray-900 dark:text-white">{experience.company}</h3>
                <p className="mb-4 text-base font-normal font-mono text-gray-500 dark:text-gray-400">{experience.description}</p>
              </li>
            )
          })}
        </ol>
        <div className="flex justify-center">
          <Button text="Download resume" />
        </div>
      </div>
    </section>
  )
}

export default ExperiencePage