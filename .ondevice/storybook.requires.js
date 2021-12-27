/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
} from "@storybook/react-native";

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));

const getStories = () => {
  return [
    require("../src/components/avatar-group/stories/AvatarGroup.stories.tsx"),
    require("../src/components/avatar/stories/Avatar.stories.tsx"),
    require("../src/components/avatar/stories/AvatarStack.stories.tsx"),
    require("../src/components/badge/stories/Badge.stories.tsx"),
    require("../src/components/badge/stories/BadgeStack.stories.tsx"),
    require("../src/components/button/stories/Button.stories.tsx"),
    require("../src/components/button/stories/ButtonStack.stories.tsx"),
    require("../src/components/progress/stories/ProgressBasic.stories.tsx"),
    require("../src/components/spinner/stories/SpinnerBasic.stories.tsx"),
    require("../src/components/switch/stories/Switch.stories.tsx"),
    require("../src/components/tag/stories/Tag.stories.tsx"),
    require("../src/components/tag/stories/TagStack.stories.tsx"),
    require("../src/primitives/AnimatedBox/stories/AnimatedBox.stories.tsx"),
    require("../src/primitives/Box/stories/Box.stories.tsx"),
    require("../src/primitives/Text/stories/Text.stories.tsx"),
    require("../src/primitives/Touchable/stories/Touchable.stories.tsx"),
  ];
};

configure(getStories, module, false);
