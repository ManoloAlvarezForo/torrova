import { TorrovaPage } from './app.po';

describe('torrova App', () => {
  let page: TorrovaPage;

  beforeEach(() => {
    page = new TorrovaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
