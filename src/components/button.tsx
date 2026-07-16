import Link from 'next/link';
import type { ButtonHTMLAttributes, ComponentPropsWithoutRef, ReactNode } from 'react';

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff3ec]';

type SharedButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

type LinkButtonProps = SharedButtonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, 'href' | 'className' | 'children'>;

type NativeButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({ children, href, variant = 'primary', ...props }: ButtonProps) {
  const variantClass = {
    primary: 'bg-[#9f2323] text-white shadow-soft hover:bg-[#7f1919]',
    secondary: 'bg-[#fff6f1] text-[#7d1f1c] ring-1 ring-[#e3b3a9] hover:bg-[#ffe8e1]',
    ghost: 'bg-transparent text-[#7d1f1c] hover:bg-[#fde7e2]',
  }[variant];

  if (href) {
    const { className = '', ...linkProps } = props as Omit<
      ComponentPropsWithoutRef<typeof Link>,
      'href' | 'className' | 'children'
    > & {
      className?: string;
    };

    return (
      <Link className={`${baseClass} ${variantClass} ${className}`} href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { className = '', type = 'button', ...buttonProps } = props as NativeButtonProps;

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
