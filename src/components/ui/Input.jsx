const Input = ({ 
  label, 
  type = 'text', 
  error,
  className = '',
  ...props 
}) => {
  const baseStyles = 'w-full px-4 py-3 bg-charcoal border border-dark-grey rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-gold focus:shadow-gold-glow';
  
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-2 text-platinum">
          {label}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          className={`${baseStyles} min-h-[120px] resize-y ${className}`}
          {...props}
        />
      ) : (
        <input
          type={type}
          className={`${baseStyles} ${className}`}
          {...props}
        />
      )}
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};

export default Input;
