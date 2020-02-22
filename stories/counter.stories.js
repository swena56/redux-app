import React from 'react';

import Counter from './../common/components/Counter';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Counter',
  component: Counter,
};

export const CounterContainer  = () => (
	<Counter 
		increment={action('increment')} 
		decrement={action('decrement')} 
		incrementIfOdd={action('incrementIfOdd')} 
		incrementAsync={action('incrementAsync')} 
		counter={3}
	/>
);

CounterContainer.story = {
  name: 'basic counter',
};
