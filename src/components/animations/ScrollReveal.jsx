import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const ScrollReveal = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      transition={{ ...fadeInUp.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
