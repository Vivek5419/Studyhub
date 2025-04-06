import { animate, spring } from 'motion';

export const fluidTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1
};

export const scaleUp = (element: HTMLElement) => {
  return animate(
    element,
    { scale: [0.97, 1], opacity: [0.5, 1] },
    { duration: 0.2, easing: spring() }
  );
};

export const slideIn = (element: HTMLElement, direction: 'left' | 'right' = 'right') => {
  const x = direction === 'left' ? -20 : 20;
  return animate(
    element,
    { x: [x, 0], opacity: [0, 1] },
    { duration: 0.3, easing: spring() }
  );
};