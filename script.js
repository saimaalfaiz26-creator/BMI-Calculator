function calculationBMI(){
	let height=document.getElementById("height").value;
	let weight=document.getElementById("weight").value;
	height=height/100;
	let BMI=weight/(height*height);
	BMI=BMI.toFixed(2);
	let result="";
	if (BMI<18.5){
		result="underweight";
	} else if(BMI>=18.5 && BMI<24.5){
		result="normal weight";
	} else if(BMI>=25 && BMI<29.9){

	} else{
		result="obese";
	}
    document.getElementById("result").innerHTML="your BMI is " + BMI + " (" + result + ")";
}