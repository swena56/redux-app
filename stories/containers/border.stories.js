import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

storiesOf('border', module)
  .add('default', withInfo()(() => (
    <div>test</div>
  )))