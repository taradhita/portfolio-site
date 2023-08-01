import {motion} from 'framer-motion'
import { forwardRef, useEffect, useState } from 'react'

const PageTransition = ({children, ...rest}, ref) => {
  const initialStyle = { x: '100%' }
	const animateStyle = { x: 0 }
	const exitStyle = { x: '-100%' }

	const transition = { duration: 0.6, ease: 'easeInOut' }

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // After the component is mounted, set the initial state to 'inTheCenter'
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      ref={ref}
			initial={initialStyle}
			animate={animateStyle}
			exit={exitStyle}
			transition={transition}
			{...rest}
    >
      {children}
    </motion.div>
  )
}

export default forwardRef(PageTransition)