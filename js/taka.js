

// Define the input value here
function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = Number(inputField.value);
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
        return alert('Please input valid amount of money in number type');
    }

    foodInput.value = '';

    if(isNaN(clothesInput) || clothesInput < 0){
        clothesInput.value = '';
        return alert('Please input valid amount of money in number type');
    }

    clothesInput.value = '';

   

    // total balance define here
    const expensesBalance = document.getElementById('expenses-input');
    const expensesAmount = Number(expensesBalance.innerText);
    const totalExpenses = expensesAmount + totalInputAmount;
    expensesBalance.innerText = totalExpenses;

    // balance amount define here
    const getBalance = document.getElementById('balance-input');
    const balanceAmount = Number(getBalance.innerText)
    const balance = Number(incomeInput) - Number(totalExpenses);
    getBalance.innerText = balance;

    if(balance < 0 || totalExpenses < 0){
        getBalance.innerText = '';
        expensesBalance.innerText = '';
        return alert('You are cross your Limit');
        
    } 
    incomeInput.value = '';


})




// function getInputForSave(saveInputId) {
//     const saveSectionField = document.getElementById(saveInputId);
//     const saveSectionValue = Number(saveSectionField.value);
//     return saveSectionValue;
// }


// document.getElementById('save-btn').addEventListener('click', function () {
//     const saveInput = getInputForSave('save-field');
//     const getBalance = getInputForSave('balance-input');
//     const savingAmount = getInputForSave('saving-amount');
//     const remainingBalance = getInputForSave('remaining-balance');

//     savingAmountFinal = (getBalance * Number)/100;

//     getBalance.innerText = savingAmountFinal;
// });




document.getElementById('save-btn').addEventListener('click', function () {
    const savingInput = document.getElementById('save-field');
    const savingInputValue = parseFloat(savingInput.value);
    const savingAmount = (incomeInput / 100) * savingInputValue;
    savingInput.innerText = savingAmount;
    const savingAmountInput = document.getElementById('saving-amount');
    const savingAmountValue = parseFloat(savingAmountInput.innerText);
    savingAmountInput.innerText = savingAmount;

    const remBalance = document.getElementById('remaining-balance');
    const remBalanceValue = parseFloat(remBalance.innerText);
    const remainingBalance = balance - savingAmount;
    remBalance.innerText = remainingBalance;