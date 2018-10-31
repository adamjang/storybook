import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// automatically import all story.js files
const req = require.context('./stories', true, /\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(withInfo);

configure(loadStories, module);
