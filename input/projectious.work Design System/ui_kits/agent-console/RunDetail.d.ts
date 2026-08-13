import * as React from 'react';
import type { Pipeline } from './PipelineList';

export interface RunDetailProps {
  /** The selected pipeline, or undefined for the empty state. */
  pipeline?: Pipeline;
  /** A theme object from `THEMES` in `theme.jsx`. */
  theme: Record<string, any>;
}

/** Detail panel for one run — stages, metadata, and log output. */
export declare function RunDetail(props: RunDetailProps): React.ReactElement;
