import * as React from 'react';

export interface TopbarProps {
  /** Current view title. */
  title: string;
  /** A theme object from `THEMES` in `theme.jsx`. */
  theme: Record<string, any>;
  /** Active colour mode. */
  mode: 'light' | 'dark';
  /** Toggles the colour mode. */
  onToggleMode?: () => void;
}

/** Console top bar — view title, search, and the colour-mode control. */
export declare function Topbar(props: TopbarProps): React.ReactElement;