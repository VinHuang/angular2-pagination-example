import { PageTestPage } from './app.po';

describe('page-test App', () => {
  let page: PageTestPage;

  beforeEach(() => {
    page = new PageTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
