import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'font-medium transition-all duration-300 ease-luxury inline-flex items-center justify-center';
  
  const variants = {
    primary: 'gold-gradient text-black hover:shadow-gold-glow hover:scale-[1.02]',
    secondary: 'bg-white text-black hover:bg-platinum',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-black',
    ghost: 'text-white hover:text-gold',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
