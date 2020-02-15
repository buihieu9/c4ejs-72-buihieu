// //10. Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as
// follows
// BMI (Body Mass Index):
// BMI = mass (kg) / (height(m) x height(m))
// Note: you must do the conversion from cm to m before calculation
// And then based on the calculated BMI, tell them that they are:
// ● Severely underweight if BMI < 16
// ● Underweight if BMI is between 16 and 18.5
// ● Normal if BMI is between 18.5 and 25
// ● Overweight if BMI is between 25 and 30
// ● Obese if BMI is more than 30


let weight=prompt('your weight in kg?')
let hight=prompt('your height in cm?')
x=hight/100;
a=weight/(x*x)
alert(bmi=Math.round(a*10)/10)

if(bmi<16){
    alert('severely underweight')
}else if(bmi<18.5){
    alert('underweight')
}else if(bmi<25){
    alert('normal')
}else if(bmi<30){
    alert('overweight')
}else{alert('obese')}
