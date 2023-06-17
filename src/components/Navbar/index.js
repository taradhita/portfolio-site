import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [isShow, setIsShow] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => {
      setIsShow(!isShow)
  }

  const handleLinkClick = () => {
    setTimeout(() => {
      setIsShow(false);
    }, 200); 
  };

  const toggleDarkMode = () => {
    if (theme === "light") {
      return setTheme("dark");
    }
    return setTheme("light");
  }

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const menus = [
    {href:'/about', page:'About'}, 
    {href:'/experience', page:'Experience'}, 
    {href:'/projects', page:'Projects'}, 
    {href:'contact', page:'Contact'},
  ]

  return (
    <nav className="bg-white dark:bg-gray-800 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" onClick={() => setIsShow(false)} className="font-mono text-xl font-bold dark:text-gray-200">
              Nadia Taradhita
          </Link>
          {/* Navbar Menu Desktop */}
          <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menus.map(menu => {
                  return (
                    <Link href={menu.href} key={menu.page} className="text-dark dark:text-gray-200 hover:text-white dark:hover:text-gray-700 hover:bg-gray-700 dark:hover:bg-gray-200  px-3 py-2 rounded-md text-sm font-mono font-medium">
                      {menu.page}
                    </Link>
                  )
                })}
                <button onClick={toggleDarkMode} className="hover:bg-gray-700 dark:hover:bg-gray-200 dark:text-gray-200 hover:text-white dark:hover:text-gray-700 px-3 py-2 rounded-md">
                  <FontAwesomeIcon icon={faCircleHalfStroke} size="lg"/>
                </button>
              </div> 
          </div>
          {/* Hamburger Icon for Mobile */}
          <div className="flex lg:hidden">
            <button
              className="text-dark dark:text-gray-300 inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isShow ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Hidden Menu for Mobile */}
          {isShow && (
            <div className="absolute top-16 right-0 bottom-0 lg:hidden bg-white  dark:bg-gray-800 w-full z-10">
              <div className="flex flex-col items-center justify-centerpx-2 pt-2 pb-3 space-y-1 sm:px-3">
                {menus.map(menu => {
                  return (
                    <Link
                      onClick={handleLinkClick}
                      href={menu.href}
                      key={menu.page}
                      className="text-dark dark:text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium font-mono"
                      >
                      {menu.page}
                    </Link>
                  )
                })}
                <button onClick={toggleDarkMode} className="px-3 py-2 dark:text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"><FontAwesomeIcon icon={faCircleHalfStroke} size="lg"/></button>
            </div>
          </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
