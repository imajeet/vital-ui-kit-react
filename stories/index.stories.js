/* eslint-disable no-unused-expressions */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { injectGlobal } from 'styled-components';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { Welcome } from '@storybook/react/demo';

import { Button, Label, ButtonGroup } from '../lib/';

injectGlobal`
  @font-face {
    font-family: 'icomoon';
    src: url('../lib/assets/fonts/icomoon.ttf');
  }

  body {
    font-family: "Roboto", "Helvetica", "Segoe UI", "Arial", "sans-serif", "Microsoft JhengHei", "Heiti TC";
  }
`;


// storiesOf('Welcome', module).add('to Storybook', () => (
//   <Welcome showApp={linkTo('Button')} />
// ));

const props = {
  nature: select(
    'Nature',
    {
      default: 'Default',
      primary: 'Primary',
      success: 'Success',
      info: 'Info',
      alarm: 'Alarm',
      warning: 'Warning',
    },
    'default',
  ),
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    withInfo('Buttons default style')(
      withNotes('This is note')(() => (
        <Button
          {...props}
          size={select(
            'Size',
            {
              xsmall: 'xsmall',
              small: 'small',
              medium: 'medium',
              large: 'large',
              xlarge: 'xlarge',
            },
            'medium',
          )}>
          {text('Label', 'Default Button')}
        </Button>
      )),
    ),
  )
  .add(
    'Flat',
    withInfo('Buttons Flat style')(
      withNotes('')(() => (
        <Button flat={boolean('Flat', true)} {...props}>
          {text('Label', 'Flat Button')}
        </Button>
      )),
    ),
  )
  .add(
    'Light',
    withInfo('Button Light Style')(
      withNotes('')(() => (
        <Button light={boolean('Light', true)} {...props}>
          {text('Label', 'Light Button')}
        </Button>
      )),
    ),
  )
  .add(
    'Disable',
    withInfo('Buttons disable style')(
      withNotes('')(() => (
        <Button disabled={boolean('Disabled', true)}>
          {text('Label', 'Disable Button')}
        </Button>
      )),
    ),
  )
  .add(
    'Link',
    withInfo('Link style')(
      withNotes('')(() => (
        <Button link>{text('Label', 'Disable Button')}</Button>
      )),
    ),
  )
  .add(
    'ButtonGroup',
    withInfo('Button Group')(
      withNotes('')(() => (
        <ButtonGroup>
          <Button>{text('Label', 'Button')}</Button>
          <Button>{text('Label', 'Button')}</Button>
          <Button>{text('Label', 'Button')}</Button>
        </ButtonGroup>
      )),
    ),
  );
// .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
// .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

// storiesOf('Label', module)
//   .addDecorator(withKnobs)
//   .add(
//     'Input Label',
//     withInfo(`info`)(
//       withNotes('This is label')(() => (
//         <Label>Hello {text('Label', 'Eric')}</Label>
//       )),
//     ),
//   );
