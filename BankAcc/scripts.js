// Function to update balance
function updateBalance(action) {
    // Get the current balance
    let currentBalance = parseFloat(document.getElementById('Cbalance').value);

    // Initialize the amount variable
    let amount = 0;

    // Handle deposit
    if (action === 'deposit') {
        amount = parseFloat(document.getElementById('deposit').value);
        if (!isNaN(amount) && amount > 0) {
            currentBalance += amount;
        } else {
            alert("Please enter a valid deposit amount.");
        }
    }
    // Handle withdraw
    else if (action === 'withdraw') {
        amount = parseFloat(document.getElementById('withdraw').value);
        if (!isNaN(amount) && amount > 0 && amount <= currentBalance) {
            currentBalance -= amount;
        } else {
            alert("Please enter a valid withdrawal amount, or ensure you have enough balance.");
        }
    }

    // Update the current balance
    document.getElementById('Cbalance').value = currentBalance.toFixed(2);
}

// Attach event listeners to the buttons
document.getElementById('depositBtn').addEventListener('click', function () {
    updateBalance('deposit');
});

document.getElementById('withdrawBtn').addEventListener('click', function () {
    updateBalance('withdraw');
});
