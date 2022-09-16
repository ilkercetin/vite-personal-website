import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/vue';
import App from './App.vue';

describe('App', () => {
  it('render hello world', () => {
    render(App);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
});
