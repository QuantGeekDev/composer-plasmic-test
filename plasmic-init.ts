import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { Text, ComposerProvider, Flex, Avatar } from '@cmpsr/components';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "drHjMhwWqKhmHjpXntaP63",
      token: "CBqv2iCZ4TCSyAkdKjdU8tuKDTMq2M4IhYuWMlPXBvmexxZDUN3RpoEVgYYaevmWN6iebYmx6LYADpm6w6w",
    },
  ],
  preview: false,
});

PLASMIC.registerComponent(ComposerProvider, {
  name: 'ComposerProvider',
  props: {
    theme: 'object',
    resetCSS: 'boolean',
    children: 'slot'
  }
});

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


PLASMIC.registerComponent(Flex, {
  name: 'ComposerFlex',
  props: {
    children: 'slot',
    direction: {
      type: 'choice',
      options: ['row', 'column', 'row-reverse', 'column-reverse']
    },
    wrap: {
      type: 'choice',
      options: ['wrap', 'wrap-reverse', 'nowrap']
    },
    align: {
      type: 'choice',
      options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline']
    },
    justify: {
      type: 'choice',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']
    },
    gap: 'string',
    padding: 'string',
    margin: 'string',
    border: 'string',
    className: 'string'
  }
});

PLASMIC.registerComponent(Avatar, {
  name: 'ComposerAvatar',
  props: {
    name: 'string',
    src: 'string',
    showBadge: 'boolean',
    marginRight: 'string',
    marginLeft: 'string',
    marginTop: 'string',
    marginBottom: 'string'
  },
});
