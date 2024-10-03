let expenses = [];

function addExpense() {
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const date = document.getElementById("date").value;

  if (description && category && amount && date) {
    const expense = { description, category, amount, date };
    expenses.push(expense);
    updateTable();
    calculateTotal();
    clearForm();
  }
}

function updateTable() {
  const tbody = document
    .getElementById("expense-table")
    .getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  const filterCategory = document.getElementById("filter-category").value;

  expenses
    .filter(
      (expense) =>
        filterCategory === "All" || expense.category === filterCategory
    )
    .forEach((expense) => {
      const row = tbody.insertRow();
      row.insertCell(0).innerText = expense.description;
      row.insertCell(1).innerText = expense.category;
      row.insertCell(2).innerText = expense.amount.toFixed(2);
      row.insertCell(3).innerText = expense.date;
    });
}

function calculateTotal() {
  const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  document.getElementById("total-amount").innerText = totalAmount.toFixed(2);
}

function filterExpenses() {
  updateTable();
}

function clearForm() {
  document.getElementById("description").value = "";
  document.getElementById("category").value = "Groceries";
  document.getElementById("amount").value = "";
  document.getElementById("date").value = "";
}
