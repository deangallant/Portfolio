const addButton = document.querySelector('.add__container');
const addDescription = document.querySelector('.add__description');
const addValue = document.querySelector('.add__value');
const incomeList = document.querySelector('.income__list');
const expensesList = document.querySelector('.expenses__list');
const budgetValue = document.querySelector('.budget__value');
const incomeOverview = document.querySelector('.budget__income--value');
const expenseOverview = document.querySelector('.budget__expenses--value');
const deleteIncomeTransaction = document.querySelector('.income__list');
const deleteExpenseTransaction = document.querySelector('.expenses__list');
let budgetMonth = document.querySelector('.budget__title--month');
const options = {month: 'long', year: 'numeric'};
budgetMonth.innerHTML = new Date().toLocaleString('en-US', options);

class TransactionList {
  
  incomeArr = [];
  expenseArr = [];
  monthlyIncome = 0;
  monthlyExpense = 0;
  monthlyAvailableBudget = 0;
  id = 0;

  constructor() {
    
  }

   addNewTransaction(description, value){
  
  if(value > 0) {
    
    this.incomeArr.push(new Transaction (description, value, this.id));
    this.monthlyIncome += value;
    ++ this.id;

  } else {
    
    this.expenseArr.push(new Transaction (description, value, this.id));
    this.monthlyExpense += value;
    ++ this.id;

  }
    
  this.monthlyAvailableBudget = this.monthlyIncome + this.monthlyExpense;
  this.render(description, value, this.id);

}

  removeTransaction(id) {
    
    this.incomeArr.forEach((ele, index) => {
     
      if(ele.id == id) {
        
        this.monthlyIncome -= this.incomeArr[index].value;
        this.monthlyAvailableBudget = this.monthlyIncome + this.monthlyExpense;
        this.incomeArr.splice(index, 1);
        
        this.removeRender();
        
      }
      
    })

    this.expenseArr.forEach((ele, index) => {
     
      if(ele.id == id) {
        
        this.monthlyExpense -= this.expenseArr[index].value;
        this.monthlyAvailableBudget = this.monthlyIncome + this.monthlyExpense;
        this.expenseArr.splice(index, 1);
        this.removeRender();
      }
    })

  }

  removeRender() {

    budgetValue.innerHTML = `$${this.monthlyAvailableBudget.toFixed(2)}`;
    incomeOverview.innerHTML = `$${this.monthlyIncome.toFixed(2)}`;
    expenseOverview.innerHTML = `$${this.monthlyExpense.toFixed(2)}`;

  }

  render(description, value, id) {

    budgetValue.innerHTML = `$${this.monthlyAvailableBudget.toFixed(2)}`;
    incomeOverview.innerHTML = `$${this.monthlyIncome.toFixed(2)}`;
    expenseOverview.innerHTML = `$${this.monthlyExpense.toFixed(2)}`;
    const options1 = {month: 'long', day: 'numeric', year: 'numeric'};

    if ( value >= 0 ) {
    
    incomeList.insertAdjacentHTML('afterbegin',`
    
    <div class="item" data-transaction-id=${id}>
        <div class="item__description">${description}</div>            
        <div class="right">
          <div class="item__value">+ $${value.toFixed(2)}</div>
          <div class="item__delete">
            <button class="item__delete--btn">
              <i class="ion-ios-close-outline"></i>
            </button>
          </div>
        </div>
        <div class="item__date">${new Date().toLocaleString('en-US', options1)}</div>`

    )

    
  } else {

      expensesList.insertAdjacentHTML('afterbegin',`
    
      <div class="item" data-transaction-id=${id}>
          <div class="item__description">${description}</div>            
          <div class="right">
            <div class="item__value">$${value.toFixed(2)}</div>
            <div class="item__percentage"></div>
            <div class="item__delete">
              <button class="item__delete--btn">
                <i class="ion-ios-close-outline"></i>
              </button>
            </div>
          </div>
          <div class="item__date">${new Date().toLocaleString('en-US', options1)}</div>`

      )} 
  }
}

class Transaction {
  
  constructor(description, value, id) {

    this.id = id;
    this.description = description;
    this.value = value;
    this.date = 'May 3, 2020';

  }
}

const deansBudget = new TransactionList;

addButton.addEventListener('click', (event) => {

if (event.target.className == 'ion-ios-checkmark-outline' && addDescription.value != '' && addValue.value != '') {

  deansBudget.addNewTransaction(addDescription.value, parseInt(addValue.value));
  addDescription.value = '';
  addValue.value = '';
  
}
})

deleteIncomeTransaction.addEventListener('click', (event) => {

  if(event.target.className == 'ion-ios-close-outline'){
  
  let closest = event.target.closest('.item')
  let transId = closest.dataset.transactionId -1 
  deansBudget.removeTransaction(transId)
  event.target.closest('.item').remove()

  }
  
})

deleteExpenseTransaction.addEventListener('click', (event) => {

  if(event.target.className == 'ion-ios-close-outline'){
    
  let closest = event.target.closest('.item')
  let transId = closest.dataset.transactionId -1 
  deansBudget.removeTransaction(transId)
  event.target.closest('.item').remove()

  }
})