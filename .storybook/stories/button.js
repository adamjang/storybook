import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color } from '@storybook/addon-knobs';
import { Button } from 'uikit';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Button />
  ))
  .add('configurable text', () => (
    <Button>
      {text('Text', 'I am a button')}
    </Button>
  ))
  .add('configurable background color', () => (
    <Button backgroundColor={color('Background color', '#1c7bd3', 'group-button1')}>
      {text('Text', 'I am a button')}
    </Button>
  ))
