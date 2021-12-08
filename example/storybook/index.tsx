// if you use expo remove this line
import { withKnobs } from '@storybook/addon-knobs';
import {
  addDecorator,
  configure,
  getStorybookUI,
} from '@storybook/react-native';
import React from 'react';
import { AppRegistry } from 'react-native';
import { TailwindThemeProvider } from '../../src';
import './rn-addons';

// <----- For Custom Tailwind Theme ----->
// import { myTailwindTheme } from '../customTheme/tailwind';

// enables knobs for all stories
addDecorator(withKnobs);
addDecorator((getStory) => (
  <TailwindThemeProvider
  // style={myTailwindTheme.style}
  >
    {/* @ts-ignore */}
    {getStory()}
  </TailwindThemeProvider>
));

// import stories
configure(() => {
  // require('../App/stories/Box.stories');
  // require('../App/stories/Text.stories');
  // require('../App/stories/Touchable.stories');
  // require('../App/stories/TouchableWithoutFeedback.stories');
  // require('../App/stories/AnimatedBox.stories');
  // require('../App/stories/Switch.stories');
  // require('../App/stories/components/BadgeStories/Badge.stories');
  // require('../App/stories/components/ProgressStories/Progress.stories');
  // require('../App/stories/components/AvatarStories/Avatar.stories');
  // require('../App/stories/components/AvatarStories/AvatarStack.stories');
  // require('../App/stories/components/ButtonStories/Button.stories');
  // require('../App/stories/components/SpinnerStories/Spinner.stories');
  // require('../App/stories/components/CircularProgressStories/CircularProgress.stories');
  require('../App/stories/components/TagStories/Tag.stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({ asyncStorage: null });

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
