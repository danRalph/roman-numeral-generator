const numberInput = document.getElementById('numberInput');

//Listening for input action.
numberInput.addEventListener("input", (e)=>{
    output.value = romanNumeralGenerator(e.target.value);
  });


const romanNumeralGenerator = (num) => {
    const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanNumeral = ["M","CM", "D","CD","C","XC","L","XL","X","IX","V","IV","I"];

    let str = "";
  
    if (num < 1 || num > 3999) {                                   //Checks number entered is between 1 and 3999
         alert( "Enter a number between 1 and 3999");
    } else {
        for (let i = 0; i <= decimalValue.length; i++) {           //Runs through decimalValue object
            while (num >= decimalValue[i]) {                       //Checks num entered is equal or greater then decimalValue
                str += romanNumeral[i];                            //Append romanNumeral[i] in to the variable str
                num -= decimalValue[i];                            //Append num entered with decimalValue .. Subtract
        }
      }
    }
    return str;
  };