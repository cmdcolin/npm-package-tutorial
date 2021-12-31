import { getMessage } from '../src/util'
test('expected message returned', () => {
  expect(getMessage()).toBe('hello')
})
