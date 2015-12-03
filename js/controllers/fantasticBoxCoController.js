fantasticBoxCo.controller('fantasticBoxCoController', ['optionList', '$location', '$anchorScroll',
  function(optionList, $location, $anchorScroll) {
  var self = this;

  self.totalCost = 0;

  self.width = 0.00;
  self.height = 0.00;
  self.length = 0.00;
  self.quantity = 0;

  self.active = 1;

  self.getOptions = (function() {
    optionList.then(function(response){
      self.optionList = response.data;
    });
  })();

  self.calculateArea = function() {
    console.log(self.optionList)
    var area = (self.width * self.height) * 2
    area += (self.width * self.length) * 2
    area += (self.length * self.height) * 2
    return area;
  };

  self.calculateCardboardCost = function() {
    if(self.cardboard === undefined) { return 0 };
    self.cardboardErrorCheck();
    var result = parseFloat(self.cardboard.substr(-6, 4));
    var cardboardCost = (self.calculateArea() * result) * self.quantity;
    return cardboardCost;
  };

  self.cardboardErrorCheck = function() {
    if(self.calculateArea() > 2 && self.cardboard === 'C - £0.05m²') {
      return true;
    }
  };

  self.calculatePrintCost = function() {
    if(self.print === undefined) { return 0 };
    var result = parseFloat(self.print.substr(-6, 4));
    if(isNaN(result)) {
      self.discount = true;
      return 0;
    }
    self.discount = false;
    var printCost = (self.calculateArea() * result) * self.quantity
    return printCost
  };

  self.calculateHandleCost = function() {
    if(self.handles === undefined) { return 0 };
    var handleCost = parseFloat(self.handles.substr(-12, 4));
    handleCost = self.quantity * handleCost;
    return handleCost;
  };

  self.calculateReinforcedCost = function() {
    if(self.reinforced === undefined) { return 0 };
    var reinforcedCost = parseFloat(self.reinforced.substr(-12, 4));
    reinforcedCost = self.quantity * reinforcedCost;
    return reinforcedCost;
  };

  self.calculateTotalCost = function() {
    if(self.cardboardErrorCheck()) { return self.totalCost = "Error"}
    self.totalCost = self.calculateCardboardCost();
    self.totalCost += self.calculatePrintCost();
    self.totalCost += self.calculateHandleCost();
    self.totalCost += self.calculateReinforcedCost();
    if(self.discount) {
      self.totalCost = self.totalCost * 0.95;
    }
  };

  self.gotoAnchor = function(location) {
    var newHash = 'step-' + location;
    if($location.hash() !== newHash) {
      $location.hash('step-' + location);
    } else {
      $anchorScroll();
    }
    self.active = location;
  };
}]);
