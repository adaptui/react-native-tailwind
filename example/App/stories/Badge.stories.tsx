import { radios, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { Badge } from 'react-native-system';

const badgeStories = storiesOf('Badge', module);

badgeStories.add('Default', () => (
  <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
    <Badge
      size={radios('size', { sm: 'sm', md: 'md', lg: 'lg' }, 'lg')}
      variant={radios(
        'variant',
        { outline: 'outline', solid: 'solid', subtle: 'subtle' },
        'solid'
      )}
      themeColor={radios(
        'themeColor',
        {
          primary: 'primary',
          secondary: 'secondary',
          default: 'default',
          success: 'success',
          danger: 'danger',
        },
        'default'
      )}
    >
      {text('children', 'Beta')}
    </Badge>
  </View>
));
