import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { Text, ComposerProvider } from '@cmpsr/components';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "drHjMhwWqKhmHjpXntaP63",
      token: "CBqv2iCZ4TCSyAkdKjdU8tuKDTMq2M4IhYuWMlPXBvmexxZDUN3RpoEVgYYaevmWN6iebYmx6LYADpm6w6w",
    },
  ],
  preview: false,
});

// Register the ComposerProvider component
PLASMIC.registerComponent(ComposerProvider, {
  name: 'ComposerProvider',
  props: {
    theme: 'object',
    resetCSS: 'boolean',
    children: 'slot'
  }
});

// Register the Text component from @cmpsr/components
PLASMIC.registerComponent(Text, {
  name: 'ComposerText',
  props: {
    variant: {
      type: 'choice',
      options: [
        'display-2xl',
        'display-xl',
        'display-lg',
        'display-md', 
        'display-sm',
        'body-xl',
        'body-lg',
        'body-md',
        'body-sm',
        'body-xs',
        'caption',
        'tiny'
      ]
    },
    textStyle: 'string',
    align: {
      type: 'choice',
      options: ['left', 'center', 'right']
    },
    color: 'string',
    children: 'slot'
  }
});
