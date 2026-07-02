import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
}

const Button = ({ children, href }: ButtonProps) => {
  return (
    <a
      href={href}
      className="
      inline-flex
      items-center
      gap-2

      rounded-xl

      border

      border-white/10

      bg-white/5

      px-6

      py-3

      font-medium

      transition-all

      duration-300

      hover:-translate-y-1

      hover:border-blue-500

      hover:bg-blue-500
      "
    >
      {children}
    </a>
  );
};

export default Button;
