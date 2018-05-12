function Checker(){
  
//Get the date of entry from the user
var d = new Date();
//Get the number of days from the user
d.setDate(d.getDate() + 50);
document.getElementById("demo").innerHTML = d;

}
