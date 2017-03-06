import { BibliotecaPage } from './app.po';

describe('biblioteca App', () => {
  let page: BibliotecaPage;

  beforeEach(() => {
    page = new BibliotecaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
