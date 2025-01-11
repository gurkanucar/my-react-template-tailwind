import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

const FadeTransition = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

export default FadeTransition; 