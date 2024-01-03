document.getElementById('calculate-total-player-expanse').addEventListener('click', function () {
    const orderList = document.getElementById('order-list');  // get the orderlist
    const listItem = orderList.getElementsByTagName('li');   //get the list from orderlist
    if (listItem.length > 0) {
        const lastChildNumber = listItem.length;    //get the last child of the orderlist

        // get the amount from input field
        const perPlayerCost = getTheAmountFromInputField('per-player-amount');
        const totalPlayerCost = perPlayerCost * lastChildNumber;

        // set the amount in the html tag
        const totalPlayerCostField = document.getElementById('total-player-cost');
        totalPlayerCostField.innerText = totalPlayerCost;
    } else {
        alert('No Player Selected')
    }
})

//calculate cost with manager and coach fee
document.getElementById('calculate-sub-total-cost').addEventListener('click', function () {
    const managerCost = getTheAmountFromInputField('manager-cost');
    const coachCost = getTheAmountFromInputField('coach-cost');
    const totalPlayerCostField = document.getElementById('total-player-cost');
    const totalPayerCostStirng = totalPlayerCostField.innerText;
    const totalPlayerCost = parseInt(totalPayerCostStirng);
    if (totalPlayerCost > 0) {
        //adding the 3 types cost
        const subTotalCost = managerCost + coachCost + totalPlayerCost;

        //set the amount in sub total html tag
        const subTotalField = document.getElementById('sub-total-amount-field');
        subTotalField.innerText = subTotalCost;
    }else{
        alert('Select Players first')
    }


})