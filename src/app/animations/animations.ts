import {
  trigger,
  transition,
  style,
  animate,
  state,
  keyframes
} from '@angular/animations';

// Scroll Fade In
export const scrollFadeIn = trigger('scrollFadeIn', [
  state('hidden', style({ opacity: 0 })),
  state('visible', style({ opacity: 1 })),
  transition('hidden <=> visible', animate('1000ms ease-in-out'))
]);

// Scroll Fade In Out
export const scrollFadeInOut = trigger('scrollFadeInOut', [
  state('hidden', style({ opacity: 0.5 })),
  state('visible', style({ opacity: 1 })),
  transition('hidden <=> visible', animate('900ms ease-in-out'))
]);

// Scroll Slide In Left
export const scrollSlideInLeft = trigger('scrollSlideInLeft', [
  state('hidden', style({ transform: 'translateX(-100%)', opacity: 0.5 })),
  state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
  transition('hidden <=> visible', animate('1000ms ease-in-out'))
]);

// Scroll Slide In Right
export const scrollSlideInRight = trigger('scrollSlideInRight', [
  state('hidden', style({ transform: 'translateX(100%)', opacity: 0 })),
  state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
  transition('hidden <=> visible', animate('600ms ease-in-out'))
]);

// Scroll Zoom In
export const scrollZoomIn = trigger('scrollZoomIn', [
  state('hidden', style({ transform: 'scale(0)', opacity: 0 })),
  state('visible', style({ transform: 'scale(1)', opacity: 1 })),
  transition('hidden <=> visible', animate('600ms ease-in-out'))
]);

// Scroll Rotate Zoom In
export const scrollRotateZoomIn = trigger('scrollRotateZoomIn', [
  state('hidden', style({ transform: 'scale(0) rotate(-90deg)', opacity: 0 })),
  state('visible', style({ transform: 'scale(1) rotate(0)', opacity: 1 })),
  transition('hidden <=> visible', animate('600ms ease-in-out'))
]);

// Scroll Bounce
// Esta animación hace que el elemento aparezca rebotando ligeramente antes de asentarse en su posición final. Inicia escalándose a la mitad, crece un poco más de su tamaño normal, y finalmente se asienta en su tamaño original.

export const scrollBounce = trigger('scrollBounce', [
  state('hidden', style({ transform: 'scale(0)', opacity: 0.7 })),
  state('visible', style({ transform: 'scale(1)', opacity: 1 })),
  transition('hidden <=> visible', animate('1000ms', keyframes([
    style({ transform: 'scale(0.7)', offset: 0.5 }),
    style({ transform: 'scale(1.20)', offset: 0.75 }),
    style({ transform: 'scale(1)', offset: 1.0 }),
  ])))
]);

// Scroll Flip
// Esta animación simula que el elemento realiza un giro o "flip" horizontal desde un ángulo de 90 grados hasta asentarse en un ángulo de 0 grados, mostrándose completamente.

export const scrollFlip = trigger('scrollFlip', [
  state('hidden', style({ transform: 'rotateY(90deg)', opacity: 0 })),
  state('visible', style({ transform: 'rotateY(0)', opacity: 1 })),
  transition('hidden <=> visible', animate('600ms ease-in-out'))
]);

// Scroll Pulse
// El elemento da un pequeño "latido" o "pulsación" al aparecer, creciendo ligeramente más de su tamaño original y luego volviendo a su tamaño normal.

export const scrollPulse = trigger('scrollPulse', [
  state('visible', style({ transform: 'scale(0)', opacity: 0.6 })),
  state('visible', style({ transform: 'scale(1)', opacity: 1 })),
  transition('hidden <=> visible', animate('2000ms', keyframes([
    style({ transform: 'scale(1.05)', offset: 0.7 }),
    style({ transform: 'scale(1)', offset: 1.0 }),
  ])))
]);

// Scroll Swing
// El elemento oscila o "se balancea" desde un ángulo negativo a un ángulo positivo y finalmente se estabiliza en su posición inicial, simulando un efecto de péndulo.

export const scrollSwing = trigger('scrollSwing', [
  state('hidden', style({ transform: 'rotate(-15deg)', opacity: 0.7 })),
  state('visible', style({ transform: 'rotate(0)', opacity: 1 })),
  transition('hidden <=> visible', animate('1000ms', keyframes([
    style({ transform: 'rotate(15deg)', offset: 0.25 }),
    style({ transform: 'rotate(-10deg)', offset: 0.5 }),
    style({ transform: 'rotate(5deg)', offset: 0.75 }),
    style({ transform: 'rotate(0)', offset: 1.0 }),
  ])))
]);

// Scroll Jelly
// Esta animación simula un efecto "gelatinoso". Al aparecer, el elemento se estira y comprime alternativamente en sus ejes horizontal y vertical antes de estabilizarse en su forma original.

export const scrollJelly = trigger('scrollJelly', [
  state('hidden', style({ transform: 'scale(0)', opacity: 0 })),
  state('visible', style({ transform: 'scale(1)', opacity: 1 })),
  transition('hidden <=> visible', animate('800ms', keyframes([
    style({ transform: 'scale(1.25, 0.75)', offset: 0.25 }),
    style({ transform: 'scale(0.75, 1.25)', offset: 0.5 }),
    style({ transform: 'scale(1.05, 0.95)', offset: 0.75 }),
    style({ transform: 'scale(1)', offset: 1.0 }),
  ])))
]);

// Scroll Pop-Up
//Esta animación hace que el elemento aparezca como si "saltara" del fondo, con un pequeño rebote al final, simulando el efecto de algo que es arrojado al aire y luego cae de nuevo al suelo
export const scrollPopUp = trigger('scrollPopUp', [
  transition(':enter', [
    style({ transform: 'scale(0) translateY(100%)', opacity: 0 }),
    animate('0.4s 0.1s cubic-bezier(0.680, -0.550, 0.265, 1.550)', style({ transform: 'scale(1) translateY(0)', opacity: 1 }))
  ])
]);