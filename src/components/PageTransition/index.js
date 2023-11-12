import { motion, useReducedMotion } from 'framer-motion'
import { forwardRef, useEffect, useState } from 'react'

const PageTransition = ({children, ...rest}, ref) => {
  const shouldReduceMotion = useReducedMotion()

  const hidden = shouldReduceMotion ? { opacity: 0 } : { scale: 0.5, opacity: 0 };
  const visible = shouldReduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 };

	const transition = { layout: 'position', duration: 0.6, ease: 'easeInOut' }

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [children]);

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isMounted ? visible : hidden}
      exit={hidden}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default forwardRef(PageTransition)