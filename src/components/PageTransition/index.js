import {motion} from 'framer-motion'
import { forwardRef, useEffect, useState } from 'react'

const PageTransition = ({children, ...rest}, ref) => {
  const initialStyle = { opacity: 0 }
	const animateStyle = { opacity: 1 }
	const exitStyle = { opacity: 0 }

	const transition = { duration: 0.5, ease: 'easeInOut' }

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      ref={ref}
			initial={isMounted ? initialStyle : animateStyle}
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