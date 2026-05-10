"use client";

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactNode,
  useEffect,
  useMemo,
  useRef
} from 'react';
import gsap from 'gsap';
import './CardSwap.css';

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (index: number) => void;
  children: ReactNode;
  className?: string;
}

interface CardProps {
  children: ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}

const CardSwap: React.FC<CardSwapProps> = ({
  width = 300,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = true,
  onCardClick,
  children,
  className = ""
}) => {
  const container = useRef<HTMLDivElement>(null);
  const totalCards = Children.count(children);

  const refs = useMemo(
    () => Array.from({ length: totalCards }).map(() => React.createRef<HTMLDivElement>()),
    [totalCards]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = refs.map((ref) => ref.current).filter(Boolean) as HTMLDivElement[];
      if (cards.length === 0) return;

      gsap.set(cards, {
        xPercent: -50,
        yPercent: -50,
        x: (i) => i * cardDistance,
        y: (i) => i * -verticalDistance,
        zIndex: (i) => i,
        scale: (i) => 1 - (cards.length - 1 - i) * 0.05,
        opacity: (i) => (i === 0 ? 0 : 1)
      });

      const tl = gsap.timeline({
        repeat: -1,
        defaults: { duration: 0.8, ease: 'expo.out' }
      });

      tl.to(cards, {
        x: (i) => (i === cards.length - 1 ? '+=100' : `-=${cardDistance}`),
        y: (i) => (i === cards.length - 1 ? `-=${verticalDistance}` : `+=${verticalDistance}`),
        opacity: (i) => (i === cards.length - 1 ? 0 : 1),
        scale: (i) => (i === cards.length - 1 ? 1.1 : 1 - (cards.length - 1 - (i + 1)) * 0.05),
        zIndex: (i) => (i === cards.length - 1 ? 0 : i + 1),
        stagger: { each: delay / 1000, repeat: -1 },
        onComplete: () => {
             // Logic handled by repeat -1 and stagger
        }
      });

      if (pauseOnHover && container.current) {
        container.current.addEventListener('mouseenter', () => tl.pause());
        container.current.addEventListener('mouseleave', () => tl.resume());
      }
    });

    return () => ctx.revert();
  }, [refs, cardDistance, verticalDistance, delay, pauseOnHover, totalCards]);

  const rendered = Children.map(children, (child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e: React.MouseEvent<HTMLDivElement>) => {
            child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
            onCardClick?.(i);
          }
        } as any)
      : child
  );

  return (
    <div ref={container} className={`card-swap-container ${className}`} style={{ width, height }}>
      {rendered}
    </div>
  );
};

export const Card = forwardRef<HTMLDivElement, CardProps>(({ children, style, onClick, className = "" }, ref) => {
  return (
    <div ref={ref} className={`card-swap-item ${className}`} style={style} onClick={onClick}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default CardSwap;
