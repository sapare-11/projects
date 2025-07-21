//console.log("Welcome toJS dEMO");
//document.write("<h1>Wwlcome to Js");
//let x="this is a string"

//console.log(typeof x);
//let flowers=["Rose", "Lilly", "Tulip"];
//console.log(flowers)
//let person={name:"John",age:30, city:"New York"};
//console.log(typeof person);
//alert()
//prompt()
//conform()
//alert("This is on my page")
//name=prompt("Enter name:");
//alert(name);
//confirm("are a human?")? alert("Welcome"):alert("Access Denied");
//let age=prompt("Enter your age:");
//if(age>=18){
  //  alert("You are  eligible to vote.");
//}else{
    //alert("You are not eligible to vote.");
//}
//using ternary operater
//age>=18? alert("You are eligible to vote"):alert("You are not eligible");
/*let num=prompt("Enter a number:");
if(num>100)  {
    alert("The number is greater than 100");
}
else if(num>50) {
    alert("The number is greater than 50 but less than or equal to 100");
}
else(num>0) {
    alert("The number is greater than 100");
}
else {
    alert("The number is <=0");
}
  /*  if(condition1){
        if (condition2){
            //code
        }
        else{
            //code
} }
      else{
        //code
       
    }
    */
   /* wajp to read age,blood count, hemilogin, blood sugar check if the person`s blood is good to transfer to a patient
   note:
   1.age must be above 17
   2 count must be above 1.00,000
   hemo must be above 65
   sugars should be in btwn 82-
   */
  
  let age=prompt("Enter age:");
  let bloodcount;
  let hemoglobin;
  let sugars;
  if (age>17){
    bloodcount=prompt("Enter blood count");
    if (bloodcount>100000){
        hemoglobin=prompt("Enter hemoglobin:");
        if (hemoglobin>60){
            sugars=prompt("Enter sugars");
            if (sugars>=82<=120)
                {
                    console.log("you can donate");
                }
            }
    
        }
  }




  /*syntax:
  for(intialization; CSSConditionRule; Increment/decrement){}