import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  variant = 'default', 
  hover = true,
  className = '',
  ...props 
}) => {
  const baseStyles = 'rounded-lg transition-all duration-300 ease-luxury';
  
  const variants = {
    default: 'bg-charcoal p-6',
    elevated: 'bg-charcoal p-6 shadow-soft',
    bordered: 'bg-charcoal p-6 border border-dark-grey',
    glass: 'bg-charcoal/50 backdrop-blur-sm p-6 border border-dark-grey/30',
  };
  
  const hoverStyles = hover 
    ? 'hover:-translate-y-2 hover:shadow-medium hover:border-gold/50' 
    : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
