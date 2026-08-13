import * as React from 'react';

export interface Pipeline {
  id: number;
  name: string;
  tag: string;
  status: 'healthy' | 'running' | 'warning' | 'failed' | 'idle';
  lastRun: string;
  owner: string;
  runs: number;
}

export interface StatusPillProps {
  status: Pipeline['status'];
  theme: Record<string, any>;
}

/** Status chip — solid tint plus its on-tint foreground. */
export declare function StatusPill(props: StatusPillProps): React.ReactElement;

export interface PipelineListProps {
  rows: Pipeline[];
  /** Id of the selected row. */
  selectedId?: number;
  onSelect?: (id: number) => void;
  /** A theme object from `THEMES` in `theme.jsx`. */
  theme: Record<string, any>;
}

/** Selectable table of pipelines with status, owner, and run count. */
export declare function PipelineList(props: PipelineListProps): React.ReactElement;
