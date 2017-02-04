import test from 'ava';
import { hello } from '../main';

test('it greets the world', t => {
  t.plan(1);

  t.is(hello(), 'Hello, World!');
});

test('it greets ${author}', t => {
  t.plan(1);

  t.is(hello('${author}'), 'Hello, ${author}!');
});
