
dishObject = {
    
    "displayMenu":[
        {'dishID' : 'VM1','dishName':'Vegan Moussaka🍞','Price': '250','ingredient':'eggplant with sweet potato,pumpkin in soya,mince tomato sauce'},
        {'dishID' : 'VM2','dishName':'Vegan Ball 🍅','Price': '200','ingredient': 'pumpkin,surprice sauce'},
        {'dishID' :'VM3','dishName': 'Super Burger🍔', 'Price': '220','ingredient': 'Veggie burger,pita bread with mustard,onion'},
    ],
    
    
    
    "enumerateDish" :function(){
        for(dish of this.displayMenu){
            console.log('DishID :'+  dish.dishID )
            console.log ('DishName:'+ dish.dishName)
            console.log('DishPrice :'+dish.Price)
            console.log("Contains Ingredient :" +dish.ingredient)
        }
    }
}

dishObject.enumerateDish();