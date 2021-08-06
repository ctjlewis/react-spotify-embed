/**
 * @jest-environment jsdom
 */

import * as ReactDOM from 'react-dom';
import Spotify from '../src';

describe('Spotify', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Spotify link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=14acaecc8a294b61" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
