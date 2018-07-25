import { CrazyPipe } from './crazy.pipe';

describe('CrazyPipe', () => {
  it('create an instance', () => {
    const pipe = new CrazyPipe();
    expect(pipe).toBeTruthy();
  });
});
