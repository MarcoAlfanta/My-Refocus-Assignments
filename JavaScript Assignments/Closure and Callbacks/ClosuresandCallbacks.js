function createBankAccount(initialBalance) {
  let balance = initialBalance;

  function checkBalance() {
    return balance;
  }

  function depositAmount(amount) {
    if (amount > 0) {
      balance += amount;
      return `Deposited $${amount}. Current balance: $${balance}`;
    } else {
      return "Invalid deposit amount.";
    }
  }

  function withdrawAmount(amount) {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
      return `Withdrawn $${amount}. Current balance: $${balance}`;
    } else {
      return "Insufficient funds or invalid withdrawal amount.";
    }
  }

  return {
    checkBalance,
    depositAmount,
    withdrawAmount
  };
}

const account = createBankAccount(1000);
console.log(account.checkBalance()); // Output: 1000
console.log(account.depositAmount(500)); // Output: Deposited $500. Current balance: $1500
console.log(account.withdrawAmount(200)); // Output: Withdrawn $200. Current balance: $1300
