// document.getElementById('calculate-btn').addEventListener('click', function(){
//     const incomeValue = document.getElementById('income-output')
// })




document.getElementById('calculate-btn').addEventListener('click', function(){
    let incomeValue = document.getElementById('income-input');
    let foodValue = document.getElementById('food-output');
    let rentValue = document.getElementById('rent-output');
    let othersValue = document.getElementById('others-output');
    let totalExpenses = document.getElementById('expenses-output');
    let balanceOutput = document.getElementById('balance-output');

    if(
        incomeValue.value == '' || foodValue.value < 0 || rentValue.value < 0 || othersValue < 0 || foodValue.value == '' || rentValue.value == '' || othersValue.value == '' || balanceOutput.innerText > 0 || balanceOutput.innerText == ''
    ){
        alert('Please input vlaid number more than 0 and fill all field');
        document.getElementById('balnce-output')
        return alert;
    }
    // else{
    //     alert('Please input Numbers')
    // }

    totalExpenses.innerText = parseFloat(foodValue.value) + parseFloat(rentValue.value) + parseFloat(othersValue.value);

    balanceOutput.innerText = parseFloat(incomeValue.value) - parseFloat(totalExpenses.innerText);

    

    incomeValue.value = '';
    foodValue.value = '';
    rentValue.value = '';
    othersValue.value = '';




});


