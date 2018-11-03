import '@babel/polyfill';
import * as React from 'react';
import { render } from 'react-dom';

import HelloWorld from './HelloWorld';

render(<HelloWorld title="Hello world" />, document.querySelector('main'));
