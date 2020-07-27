"use strict";
var Home = /** @class */ (function () {
    function Home(selectBoxClass) {
        var _this = this;
        this.selectBox = $(selectBoxClass);
        this.selectBox.select2();
        this.selectBox.on("change", function (event) {
            var selectedDrink = { order: _this.selectBox.val() };
            _this.orderDrink(selectedDrink);
        });
    }
    Home.prototype.orderDrink = function (drink) {
        $.post("/api/order", drink)
            .done(function (data) { alert(data); });
    };
    return Home;
}());
