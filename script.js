/*//STEP 1
var ANIMAL = ANIMAL ||{};
  ANIMAL.Dog = function(){
   
  }
  ANIMAL.Cat = function(){               
           }*/
           
/*// STEP 2
     var Cat = {
     color: "White",
     };
    function Dog() {
     this.color = "Brown";
    };
    var river = new Dog();*/

/*//STEP 3
    var Cat = {
    color: "White", 
    };

    function Dog() {
    this.color = "Brown";
};
var river = new Dog();  // instance of the Dog class.*/
           

/* //STEP 4
  var Animal = function() {
  window.console.log("The Animal has been created");
  } 
  var dog = new Animal();
     */
           
/*//STEP 5
var Animal = function(name) {
this._name = name;
  window.console.log(this._name);
  } 
  var dog = new Animal("Dog is the first Animal.");
  */
           
 /*    
 //STEP 6
 var Animal = function(type, breed, color, height, length){
 this._type = type;
  this._breed = breed;
   this._color = color;
   this._height = height;
 this._length = length;
 }
var dog = new Animal("Dog", "Australian Sheppard", "Black", "2Ft", "3Ft");
           */
           
           
 /* //STEP 7
  var Animal = function(type, breed, color, height, length){
               this.type = type;
               this.breed = breed;
               this.color = color;
               this.height = height;
               this.length = length;
           }
 var dog = new Animal("Dog", "Australian Sheppard", "Black", "2Ft", "3Ft");
 for(var prop in dog) {
      window.console.log(prop);
 }
           */
           
/* //STEP 8
  var Animal = function(type, color) {
   this._type = type;
   this._color = color;
   }
           
 Animal.prototype.speak = function() {
  if(this._type == "dog") {
  return "The " + this._color + " " + this._type + " is barking!";
  } else if(this._type =="cat") {
  return "The " + this._color + " " + this._type + " is meowing!";
  }
       }
var animal1 = new Animal("cat", "black");
 window.console.log(animal1.speak());
           */
           
  /*//STEP 9
var Animal = function(type, color) {
   var type = type;
   var color = color;
   

 var checkType = function() {
    
  if(type == "dog") {
  return 'dog';
  } else if(type =="cat") {
  return 'cat';
  }
       }
 
 this.speak = function(){
     checkType();
     console.log("The " + type + " has made a noise!");  
 }
}
var animal1 = new Animal("dog", "black");
var animal2 = new Animal("cat", "white");

animal1.speak();
animal2.speak();*/


           
 /* //The Recipe Card
 
           var Recipe = new Object();
           Recipe.title = "Guacamole";
           Recipe.servings = 4;
           Recipe.ingredients = ["3 Avacados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons  Cilantro", "1 Teaspoon Garlic", "2 Diced Tomatoes", "1 Pinch Ground Pepper"];
           Recipe.info = function() {
               window.console.log(Recipe.title + " \n Serves: " + Recipe.servings + " \n Ingredients: \n");
               for(var i =0; i< Recipe.ingredients.length; i++){
                window.console.log(Recipe.ingredients[i]);
               }
           }
           
           Recipe.info();
          */


           
/*
// The Reading List
           
var Book = new Object();
Book.title = ["The Hobbit", "The Lord of the Rings", "3 Mistakes in my Life", "2 States", "Rich Dad Poor Dad"];
Book.author = ["J.R.R.Tolkien", "J.R.R.Tolkien", "Chetan Bhagat", "Chetan Bhagat", "John Smith"];
Book.alreadyRead = ["True", "False", "True", "True", "False"];
Book.checkPrint = function(){
for(var i=0; i<5; i++) {
    if(Book.alreadyRead[i] == "True") {
        window.console.log("You already read " + Book.title[i] + " by " + Book.author[i]);
    } else if(Book.alreadyRead[i] == "False") {
        window.console.log("You still need to read " + Book.title[i] + " by " + Book.author[i]);
    }
}
}
Book.checkPrint();
*/

           