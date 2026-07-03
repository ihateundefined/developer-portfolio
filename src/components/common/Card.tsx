import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <article
      className={`rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05] ${className}`}
    >
      {children}
    </article>
  );
};

export default Card;
