let height = prompt("This program will calaulate your BMI.\nType your height in inches","70  (5 feet 10 inches)");
let weight = prompt("Type your weight in lbs","120");
let BMI = (weight/height**2) * 703;

if( BMI < 18.5 )
{
    alert("You are underweight.");
}
else if( BMI >= 18.5 && BMI<25)
{
    alert("You are at normal weight.");
}
else if( BMI >= 25 && BMI<30)
{
    alert("You are overweight.");
}
else if( BMI >= 30)
{
    alert("You are obese.");
}
else
{
    alert("Type number only.");
}