describe('fantasticBoxCo', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('FantasticBoxCo');
  });
});
