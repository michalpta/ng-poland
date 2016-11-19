import { NgPolandPrepPage } from './app.po';

describe('ng-poland-prep App', function() {
  let page: NgPolandPrepPage;

  beforeEach(() => {
    page = new NgPolandPrepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
