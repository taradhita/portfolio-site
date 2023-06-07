const Button = ({type = 'button', text}) => {
  return (
    <button type={type} className="btn border-4 border-black dark:border-gray-300 px-3 py-3 transition-colors ease-out hover:bg-teal-400 duration-500 text-gray-700 dark:text-gray-300 dark:hover:text-gray-700  font-mono text-sm font-semibold shadow-[5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[5px_5px_0px_0px_rgba(209,213,219)]">
      {text}
    </button>
  )
}

export default Button