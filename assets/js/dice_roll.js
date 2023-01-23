function diceRoll(event, matching_id) {
    // Roll the dice
    var result;
    var dice_outcome = Math.floor(Math.random() * 10) + 1;
    if (dice_outcome == 10) { result = "+2" }
    else if (dice_outcome >= 8) { result = "+1" }
    else if (dice_outcome >= 4) { result = "+0" }
    else if (dice_outcome >= 2) { result = "-1" }
    else if (dice_outcome == 1) { result = "-2" }
    else {result = "err"}
    
    // Fill the dice outcome element
    document.getElementById(matching_id).innerHTML = "...";
    setTimeout(() => {
        document.getElementById(matching_id).innerHTML = result;
      }, 250)
      
}
