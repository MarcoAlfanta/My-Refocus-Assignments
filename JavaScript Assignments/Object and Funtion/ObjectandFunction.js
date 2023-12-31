// Task 1: Create a bank account
const bankAccount = {
    bankAccountID: Math.floor(Math.random() * 100000), // Autogenerated ID
    accountNumber: '09273107740',
    credentials: {
      username: 'Clark',
      password: 'SUPERMAN',
      pin: '112727'
    },
    balance:10000,
    createdAt: new Date()
  };
  
  // Task 2: Create a user account
  const userAccount = {
    bankAccount: bankAccount,
    debitCard: '9876543210',
    firstName: 'Jordan',
    lastName: 'Clarkson',
    birthDate: '1996-02-20',
    validID: {
      type: 'passport',
      number: 'ABC123XYZ'
    },
    address: '595 South Boundary Tungkop Minglanilla Cebu'
  };
  
  // Task 3: Add functionality to the system
  function getBankAccountDetails(username, password) {
    if (
      username === bankAccount.credentials.username &&
      password === bankAccount.credentials.password
    ) {
      console.log('Bank Account Details:');
      console.log('Account Number:', bankAccount.accountNumber);
      console.log(userAccount.firstName,userAccount.lastName)
      console.log('Balance:', bankAccount.balance);
      console.log('Created At:', bankAccount.createdAt);
    } else {
      console.log('Incorrect username or password.');
    }
  }
  
  function withdrawMoney(username, password, amount) {
    if (
      username === bankAccount.credentials.username &&
      password === bankAccount.credentials.password
    ) {
      if (amount <= bankAccount.balance) {
        bankAccount.balance -= amount;
        console.log(`Withdrawal of $${amount} successful.
         New balance: $${bankAccount.balance}`);
      } else {
        console.log('Insufficient balance.');
      }
    } else {
      console.log('Incorrect username or password.');
    }
  }
  
  function depositMoney(username, password, amount) {
    if (
      username === bankAccount.credentials.username &&
      password === bankAccount.credentials.password
    ) {
      bankAccount.balance += amount;
      console.log(`Deposit of $${amount} successful. 
      New balance: $${bankAccount.balance}`);
    } else {
      console.log('Incorrect username or password.');
    }
  }
  
  // Test the functions
  getBankAccountDetails('Clark', 'SUPERMAN');
                        //Username  //Password
  withdrawMoney('Clark', 'SUPERMAN', 8000);
                //Username  //Password   //Amount
  depositMoney('Clark', 'SUPERMAN', 300);
                //Username  //Password   //Amount
  