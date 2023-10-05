
dishObject = {
    "restaurantName": "Alfanta's Eatery",
    "dishes" : "",
    "displayRestaurantName": "Alfanta Eatery",
    "displayMenu1":[
        {'dish' : 'Vegan Moussaka🍞','Price': '250','ingredient':'eggplant with sweet potato,pumpkin in soya,mince tomato sauce'},
        {'dish' : 'Vegan Ball 🍅','Price': '200','ingredient': 'pumpkin,surprice sauce'},
        {'dish' : 'Super Burger🍔', 'Price': '220','ingredient': 'Veggie burger,pita bread with mustard,onion'},
    ],
    
    "displayRestaurantName" : function(){
        console.log(this.restaurantName);
    },
    "enumerateDish" :function(){
        for(dish of this.displayMenu1){
            console.log(' DishName :'+  dish.dish + " Price ₱" + dish.Price )
            console.log(" Contains Ingredient :" +dish.ingredient)
        }
    }
}
dishObject.displayRestaurantName();
dishObject.enumerateDish();