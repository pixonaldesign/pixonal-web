import Link from 'next/link';

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function GradientButton({ 
  children, 
  href,
  onClick,
  className = ""
}: GradientButtonProps) {
  const content = (
    <div className="inline-flex justify-center items-center gap-2 text-white text-base font-normal font-untitled-sans capitalize leading-4 transition-opacity hover:opacity-90">
      {children}
    </div>
  );

  // Using CSS border-box technique with inline styles for the gradient
  const borderStyle = {
    background: `
      linear-gradient(#121212, #121212) padding-box,
      linear-gradient(to right, rgba(147, 197, 253, 1), rgba(252, 165, 165, 1)) border-box
    `,
    border: '1px solid transparent',
    borderRadius: '0.75rem'
  };

  const innerStyle = {
    background: 'linear-gradient(to right, rgba(147, 197, 253, 0.2), rgba(252, 165, 165, 0.2))',
    borderRadius: 'calc(0.75rem - 2px)'
  };

  if (href) {
    return (
      <Link 
        href={href} 
        onClick={onClick} 
        className={`inline-block ${className}`}
        style={borderStyle}
      >
        <div className="px-4 py-4" style={innerStyle}>
          {content}
        </div>
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={`inline-block ${className}`}
      style={borderStyle}
    >
      <div className="px-4 py-4" style={innerStyle}>
        {content}
      </div>
    </button>
  );
}

