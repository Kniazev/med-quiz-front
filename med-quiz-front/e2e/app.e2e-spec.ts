import { MedQuizFrontPage } from './app.po';

describe('med-quiz-front App', () => {
  let page: MedQuizFrontPage;

  beforeEach(() => {
    page = new MedQuizFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
