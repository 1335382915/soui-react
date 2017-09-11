import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'SouI Storybook',
  downPanelInRight: true,
})

function loadStories() {
  require('./stories/ui/icon')
  require('./stories/ui/button')
}

configure(loadStories, module)