const Button = ({type = 'button', text, onClick}) => {
  return (
    <button 
      type={type}
      onClick={onClick} 
      className='flex cursor-pointer items-center border-2 border-black bg-secondary-500 px-10 py-3 font-bold font-display shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none dark:hover:shadow-none'
    >
      {text}
    </button>
  )
}

export default Button