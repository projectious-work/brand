import * as React from 'react';

export interface StatusBarProps {
  /** A theme object from `THEMES` in `theme.jsx`. */
  theme: Record<string, any>;
}

/** Bottom status bar — connection, region, and build metadata. */
export declare function StatusBar(props: StatusBarProps): React.ReactElement;
