// change the values of `flavor`, `vessel`, and `toppings` to test your code

var flavor = "chocolate";

var vessel = "cone";

var toppings = "peanuts";


if((flavor === "vanilla"|| flavor == "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings == "peanuts")) {

    console.log("I'd like two scoops of "+ flavor+ " ice cream in a " +vessel +" with "+ toppings +"." );

}else{

    console.log("Do not print.");

}