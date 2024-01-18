let balance = 0;
const expenseList = document.getElementById("expenseList");
const balanceDisplay = document.getElementById("balance");

function addExpense() {
    const descriptionInput = document.getElementById("description");
    const amountInput = document.getElementById("amount");

    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (description === "" || isNaN(amount) || amount <= 0) {
        alert("説明と金額を正しく入力してください。");
        return;
    }

    const expenseItem = document.createElement("li");
    expenseItem.textContent = `${description} - ${amount.toFixed(2)}円`;
    expenseList.appendChild(expenseItem);

    balance -= amount;
    updateBalance();

    // フォームをクリア
    descriptionInput.value = "";
    amountInput.value = "";
}

function updateBalance() {
    balanceDisplay.textContent = `残高:${balance.toFixed(2)}円`;
}
