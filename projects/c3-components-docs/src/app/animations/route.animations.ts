import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    // Initial state for entering page
    query(
      ':enter',
      [
        style({
          opacity: 0,
          transform: 'translateY(10px)',
        }),
      ],
      { optional: true }
    ),

    // Animate out leaving page and in entering page
    group([
      query(
        ':leave',
        [
          animate(
            '150ms ease-out',
            style({
              opacity: 0,
              transform: 'translateY(-10px)',
            })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '200ms 100ms ease-out',
            style({
              opacity: 1,
              transform: 'translateY(0)',
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);

// Fade only animation for simpler transitions
export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
      ],
      { optional: true }
    ),
    group([
      query(
        ':leave',
        [animate('150ms ease-out', style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [animate('200ms ease-out', style({ opacity: 1 }))],
        { optional: true }
      ),
    ]),
  ]),
]);

