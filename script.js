function BMI(){
    
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let result=document.getElementById('result');
    
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.innerHTML = 'Please enter valid numbers for height and weight.';
    }

    else{

let bmi=weight/(height*height);
result.innerHTML="Your BMI is "+bmi.toFixed(2);
document.getElementById('height').value=""
document.getElementById('weight').value=""
    }
}