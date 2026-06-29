import React from 'react';
import { WorkspaceSettings } from './WorkspaceSettings/WorkspaceSettings';

/**
 * Page for story-3 — synthesised by the AEGIS pipeline so the generated
 * component is mounted by the SPA router. Props are safe placeholders; the
 * integration pass upgrades this into a data-wired container.
 */
export default function Page(): React.ReactElement {
  const props: any = {
    initialMembers: [],
  };
  return (
    <div>
      <h1>Story 3</h1>
      <WorkspaceSettings {...props} />
    </div>
  );
}
