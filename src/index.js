import '@babel/polyfill';
import * as React from 'react';
import { render } from 'react-dom';

import HelloWorld from './HelloWorld';

render(<HelloWorld />, document.querySelector('main'))