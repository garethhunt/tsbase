import test from 'ava';

import hello from '../src/hello';
import helloModule from '../src/module1';

test('Works as required', t => {
  t.is(hello('World'), 'Hello World!', 'Expected Hello World!');
});

test('Nest modules works', t => {
  t.is(helloModule('module1'), 'Hello module1 module');
});
