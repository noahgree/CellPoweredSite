'use client'

import { ChakraProvider, defaultConfig, createSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

const fontStack = [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"SF Pro Text"',
    '"SF Pro Display"',
    '"Segoe UI"',
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ].join(", ")

const system = createSystem(defaultConfig, {
  theme: {
    breakpoints: {
      "xs": "360px"
    },
    tokens: {
      fonts: {
        heading: { value: fontStack },
        body: { value: fontStack },
        mono: {
          value:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        },
      },
    },
  },

  globalCss: {
    'html, body, #root': {
      fontFamily: fontStack,
    },

    '*': {
      fontFamily: 'inherit',
    },

    'button, input, textarea, select': {
      font: 'inherit',
    },
  },
})

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
