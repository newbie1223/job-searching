// クライアントサイドのJavaScriptコード
document.addEventListener('DOMContentLoaded', () => {
    loadExpenses();
  
    document.querySelector('button').addEventListener('click', addExpense);
  });
  
  async function loadExpenses() {
    const response = await fetch('/expenses');
    const expenses = await response.json();
  
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';
  
    expenses.forEach((expense) => {
      const li = document.createElement('li');
      li.textContent = `${expense.description} - ${expense.amount.toFixed(2)}円`;
      expenseList.appendChild(li);
    });
  }
  
  async function addExpense() {
    const description = document.getElementById('description').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
  
    if (description === '' || isNaN(amount) || amount <= 0) {
      alert('説明と金額を正しく入力してください。');
      return;
    }
  
    const response = await fetch('/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description, amount }),
    });
  
    if (response.ok) {
      loadExpenses();
      document.getElementById('description').value = '';
      document.getElementById('amount').value = '';
    } else {
      alert('支出の追加に失敗しました。');
    }
  }
  