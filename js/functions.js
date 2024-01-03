function playerNameAdding(playerid, buttonid) {
    // get the player name
    const playerNameField = document.getElementById(playerid);
    const playerName = playerNameField.innerText;

    // create a list item and append
    const playerList = document.querySelector('#player-list ol');

    // Check if the number of players is less than 5 before adding a new player
    if (playerList.childElementCount < 5) {
        const li = document.createElement('li');
        li.innerText = (playerList.childElementCount + 1) + '. ' + playerName;
        playerList.appendChild(li);

        // disable the button
        const buttonField = document.getElementById(buttonid);
        buttonField.disabled = true;
        buttonField.classList.add('bg-gray-400');
        buttonField.classList.remove('hover:bg-green-600');
    } else {
        alert('You can select a maximum of 5 players.');
    }
}

function getTheAmountFromInputField(inputFieldId) {
    const field = document.getElementById(inputFieldId);
    const fieldString = field.value;
    const NumberValue = parseInt(fieldString);
    field.value = '';
    return NumberValue;
}