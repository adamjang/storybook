import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Button } from 'uikit';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Button />
  ))
  .add('configurable text', () => (
    <Button>
      {text('Text', 'This is a button')}
    </Button>
  ))
