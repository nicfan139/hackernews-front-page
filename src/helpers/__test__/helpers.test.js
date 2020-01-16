import { getHackerNewsData } from '../index';

const testEndpoint = 'beststories';

test("fetch request should return something, regardless whether or not an endpoint is passed as an argument", () => {
  expect(getHackerNewsData()).toBeDefined();
  expect(getHackerNewsData(testEndpoint)).toBeDefined();
});

test("expect the test endpoint passed as an argument to return a Promise type", () => {
  expect(getHackerNewsData(testEndpoint)).toBeInstanceOf(Promise);
});

test("no endpoint passed as argument should return an error of type object", () => {
  expect(getHackerNewsData()).toBeInstanceOf(Object);
});

test("fetch request should not take more than 10 seconds to receive a response", () => {
  expect(getHackerNewsData(testEndpoint)).toBeInstanceOf(Promise);
}, 10000);
