import * as React from 'react';

export interface SidebarProps {
  /** Key of the active nav item. */
  active?: string;
  /** Called with the key of the item the user picked. */
  onNav?: (key: string) => void;
  /** A theme object from `THEMES` in `theme.jsx`. */
  theme: Record<string, any>;
}

/** Console sidebar — brand lockup, grouped navigation, user chip. */
export declare function Sidebar(props: SidebarProps): React.ReactElement;
