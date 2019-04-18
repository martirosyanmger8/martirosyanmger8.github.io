import Budget from "./models/Budget";
import View, { DOM_ELEMENTS } from "./View";

class Application {
  constructor() {
    this.budget = new Budget();
  }

  init() {
    // setup month
    View.displayMonth();
    // setup initial budget
    View.displayBudget();

    // add listeners
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.querySelector(DOM_ELEMENTS.submitBtn).addEventListener("click", () => { this.addItem(); });
    document.querySelector(DOM_ELEMENTS.statContent).addEventListener("click", (event) => {this.removeItem(event); });
  }

  addItem() {
    // get data from inputs
    const inputData = View.getInputData();
    const isValid = this.validateUserData(inputData);
    
    if (isValid) {
      // add item
      const { type, description, value } = inputData;
      const item = this.budget.addItem(type, description, value);

      // display item
      View.addListItem(item, type);

      // clear inputs
      View.clearInputs();

      // get and display budget
      View.displayBudget({
        totalExpenses: this.budget.totalExpenses,
        totalIncomes: this.budget.totalIncomes, 
        total: this.budget.total
      });
    } else {
      //HW
    }
  }


  removeItem(event) {
    const buttonParent = event.target.parentNode.parentNode;
    const iconParent = buttonParent.parentNode;

    const id = buttonParent.dataset.id || iconParent.dataset.id;
    if(id){
      const type = buttonParent.dataset.type || iconParent.dataset.type;
      View.removeListItem(id, type);

      this.budget.deleteItem(Number(id), type);

      View.displayBudget({
        totalExpenses: this.budget.totalExpenses,
        totalIncomes: this.budget.totalIncomes, 
        total: this.budget.total
      });
    }
  }


  validateUserData(data) {
    return true; // remove this line after you version is ready
    //HW
  }
}

const app = new Application();
export default app;