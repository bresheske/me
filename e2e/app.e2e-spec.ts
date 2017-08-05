import { MePage } from './app.po';

describe('me App', () => {
  let page: MePage;

  beforeEach(() => {
    page = new MePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
