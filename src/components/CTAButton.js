export default function CTAButton({ 
  children, 
  href = "#",
  className = "",
  loading = false,
  ...props 
}) {
  const baseClasses = `
    inline-block bg-blue-500 text-white py-3 px-8 rounded-lg
    hover:bg-blue-600 hover:transform hover:scale-105 
    active:scale-95 transition-all duration-300 
    shadow-lg hover:shadow-xl
    ${loading ? 'opacity-75 cursor-not-allowed' : ''}
    ${className}
  `.trim();

  return (
    <a 
      href={href}
      className={baseClasses}
      {...props}
    >
      {loading ? (
        <div className="flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          处理中...
        </div>
      ) : children}
    </a>
  );
} 