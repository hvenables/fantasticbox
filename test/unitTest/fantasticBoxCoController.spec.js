describe('fantasticBoxCoController', function() {

  beforeEach(module('fantasticBoxCo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('fantasticBoxCoController');
  }));

  describe('initial state of controller', function() {
    it('starts with a total cost of zero', function() {
      expect(ctrl.totalCost).toEqual(0);
    });

    it('starts with empty dimensions', function() {
      expect(ctrl.width).toEqual(0.00);
      expect(ctrl.height).toEqual(0.00);
      expect(ctrl.length).toEqual(0.00);
      expect(ctrl.quantity).toEqual(0);
    });

    it('starts with active state of 1', function() {
      expect(ctrl.active).toEqual(1);
    });
  });

  describe('can make calculations', function() {
    beforeEach(function() {
      ctrl.width = 10;
      ctrl.height = 10;
      ctrl.length = 10;
      ctrl.quantity = 10;
      ctrl.cardboard = 'A - £0.20m²';
      ctrl.print = '2-color - £0.10m²';
      ctrl.handles = 'Handles - £0.10 per box';
      ctrl.reinforced = 'Reinforced - £0.05 per box';
    });

    it('can calculate area of box', function() {
      expect(ctrl.calculateArea()).toEqual(600);
    });

    it('can calculate carboard cost', function() {
      expect(ctrl.calculateCardboardCost()).toEqual(1200);
    });

    it('won\'t calculate cost if invalid input', function() {
      ctrl.cardboard = 'C - £0.05m²';
      expect(ctrl.cardboardErrorCheck()).toBeTruthy
    });

    it('can calculate print cost and won\'t apply discount', function() {
      expect(ctrl.discount).toBeFalsy;
      expect(ctrl.calculatePrintCost()).toEqual(600);
    })

    it('can add a discount if branding selected', function() {
      ctrl.print = 'FantasticBoxCo-branding';
      expect(ctrl.discount).toBeTruthy;
      expect(ctrl.calculatePrintCost()).toEqual(0);
    });

    it('can calculate handle cost', function() {
      expect(ctrl.calculateHandleCost()).toEqual(1);
    });

    it('can calculate reinforced cost', function() {
      expect(ctrl.calculateReinforcedCost()).toEqual(0.5);
    });

    it('can calculate total cost', function() {
      ctrl.calculateTotalCost();
      expect(ctrl.totalCost).toEqual(1801.5);
    });
  });
});
