import * as React from 'react';

export interface HeaderProps {
  /** Render the dark-surface variant. */
  dark?: boolean;
}

/** Sticky marketing header — mark, lockup, nav, and one accent CTA. */
export declare function Header(props: HeaderProps): React.ReactElement;
