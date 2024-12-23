import { PlasmicRootProvider as OriginalPlasmicRootProvider } from '@plasmicapp/loader-nextjs';
import { ComposerProvider } from '@cmpsr/components';
import React from 'react';

export function PlasmicRootProvider({ children, ...props }: React.ComponentProps<typeof OriginalPlasmicRootProvider>) {
  return (
    <OriginalPlasmicRootProvider {...props}>
      <ComposerProvider resetCSS>
        {children}
      </ComposerProvider>
    </OriginalPlasmicRootProvider>
  );
}
