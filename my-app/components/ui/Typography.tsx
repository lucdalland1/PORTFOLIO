import React from 'react';
import clsx from 'clsx';
import { JSX } from 'react/jsx-runtime';

type Variant = 'h1' | 'h2' | 'h3' | 'body' | 'caption';

interface TypographyProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  as?: React.ElementType;
}

const variantClasses: Record<Variant, string> = {
  h1: 'scroll-m-20 text-4xl font-bold tracking-tight lg:text-4xl text-foreground',
  h2: 'scroll-m-20 text-3xl font-semibold tracking-tight text-foreground',
  h3: 'scroll-m-20 text-2xl font-medium tracking-tight text-foreground',
  body: 'text-base leading-7 text-muted-foreground',
  caption: 'text-sm text-muted-foreground',
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  className = '',
  as,
}) => {
  const Component = as || defaultTag(variant);
  return (
    <Component className={clsx(variantClasses[variant], className)}>
      {children}
    </Component>
  );
};

// 🧠 Choix du tag HTML selon la variante
function defaultTag(variant: Variant): keyof JSX.IntrinsicElements {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
      return variant;
    case 'caption':
      return 'span';
    default:
      return 'p';
  }
}
