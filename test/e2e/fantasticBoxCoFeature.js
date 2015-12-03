describe('fantasticBoxCo', function() {

  var cardboard = element.all(by.model('fantasticBoxCtrl.cardboard'));
  var print = element.all(by.model('fantasticBoxCtrl.print'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('FantasticBoxCo');
  });

  it('should calculate cost of cardboard boxes', function() {
    element(by.model('fantasticBoxCtrl.width')).sendKeys(10);
    element(by.model('fantasticBoxCtrl.height')).sendKeys(10);
    element(by.model('fantasticBoxCtrl.length')).sendKeys(10);
    element(by.model('fantasticBoxCtrl.quantity')).sendKeys(10);
    element(by.id('areaButton')).click();
    cardboard.get(0).click();
    element(by.id('printButton')).click();
    print.get(0).click();
    element(by.id('qualityButton')).click();
    element(by.model('fantasticBoxCtrl.handles')).click();
    element(by.id('extrasButton')).click();
    expect(element(by.id('dimensions')).getText()).toEqual("10 × 10m(W)× 10m(H)× 10m(L)");
    expect(element(by.id('cardboard-grade')).getText()).toEqual("A - £0.20m²");
    expect(element(by.id('print-quality')).getText()).toEqual("3-color - £0.20m²");
    expect(element(by.id('handles')).getText()).toEqual("Handles - £0.10 per box");
    expect(element(by.id('total-cost')).getText()).toEqual("£2,401.00");
  });
});
