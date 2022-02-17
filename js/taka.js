// document.getElementById('calculate-btn').addEventListener('click', function(){
//     const incomeValue = document.getElementById('income-output')
// })


// Define the input value here
function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;

    
    
}


    

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = getInput('income-input')
    const foodInput = getInput('food-input');
    const rentInput = getInput('rent-input');
    const clothesInput = getInput('clothes-input');
    const totalInputAmount = foodInput + rentInput + clothesInput;

    if(isNaN(incomeInput) || incomeInput < 0){
        incomeInput.value = '';
        return alert('Please input valid amount of money in number type')
    }

    incomeInput.value = '';

    if(isNaN(foodInput) || foodInput < 0){
        foodInput.value = '';
        return alert('Please input valid amount of money in number type')
    }

    foodInput.value = '';

    if(isNaN(clothesInput) || clothesInput < 0){
        clothesInput.value = '';
        return alert('Please input valid amount of money in number type')
    }

    clothesInput.value = '';

   

    // total balance define here
    const expensesBalance = document.getElementById('expenses-input');
    const expensesAmount = parseFloat(expensesBalance.innerText);
    const totalExpenses = expensesAmount + totalInputAmount;
    expensesBalance.innerText = totalExpenses;

    // balance amount define here
    const getBalance = document.getElementById('balance-input');
    const balanceAmount = parseFloat(getBalance.innerText)
    const balance = incomeInput - totalExpenses;
    getBalance.innerText = balance;

    
    
    
    



})







// function calculateBtn (cost){
//     const inputValue = document.getElementById(cost + '-input');
//     const balanceValue = parseFloat(inputValue.value);

//     return balanceValue;
// }

// document.getElementById('calculate-btn').addEventListener('click', function(){
//    /*  let incomeValue = document.getElementById('income-input');
//     let foodValue = document.getElementById('food-input');
//     let rentValue = document.getElementById('rent-input');
//     let othersValue = document.getElementById('others-input');
//     let totalExpenses = document.getElementById('expenses-input');
//     let balanceOutput = document.getElementById('balance-input'); */


//     const incomeInput = calculateBtn('income');
//     const foodInput = calculateBtn('food-input');
//     const rentInput = calculateBtn('rent-input');
//     const othersInput = calculateBtn('others-input');

//     console.log(incomeInput.value);


// });



/* 


    if(
        incomeValue.value == '' || foodValue.value < 0 || rentValue.value < 0 || othersValue.value < 0 || balanceOutput.innerText < 0 || foodValue.value == '' || rentValue.value == '' || othersValue.value == '' || balanceOutput.innerText == ''
    ){
        alert('Please input valid number more than 0 and fill all field');
        return alert;
    }

    if(balanceOutput.innerText < 0 || totalExpenses.innerText > incomeValue.value){
        alert('you are cross your limit')
    }


    totalExpenses.innerText = parseFloat(foodValue.value) + parseFloat(rentValue.value) + parseFloat(othersValue.value);

    balanceOutput.innerText = parseFloat(incomeValue.value) - parseFloat(totalExpenses.innerText);


    

    incomeValue.value = '';
    foodValue.value = '';
    rentValue.value = '';
    othersValue.value = '';




});




 */


