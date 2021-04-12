import { ParcheggioPage } from './app.po';

describe('parcheggio App', function() {
  let page: ParcheggioPage;

  beforeEach(() => {
    page = new ParcheggioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
