/**
 * @format
 */

import 'react-native';
import React from 'react';
import List from './List';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<List />);
});
