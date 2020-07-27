interface DrinkOrder {
    order : string
}

class Home {

    selectBox : JQuery

    constructor(selectBoxClass: string) {

        this.selectBox = $(selectBoxClass);
        this.selectBox.select2();

        this.selectBox.on("change", (event: Select2JQueryEventObject) => {

            let selectedDrink = { order: this.selectBox.val() } as DrinkOrder;

            this.orderDrink(selectedDrink);

        });
    }
    
    private orderDrink(drink: DrinkOrder) {
        $.post("/api/order", drink)
            .done(function (data) { alert(data)})
    }

}
