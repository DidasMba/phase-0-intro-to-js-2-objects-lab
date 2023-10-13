// Write your solution in this file!

// Initialize the employee Object
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main Street',
  };
  
  // Function to update an employee Object with a new key-value pair without mutating the original Object
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to destructively update an employee Object with a new key-value pair
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key from an employee Object without mutating the original Object
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to destructively delete a key from an employee Object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Test the functions
  console.log("Initial Employee Object:", employee);
  console.log("Update Employee (Non-destructive):", updateEmployeeWithKeyAndValue(employee, 'age', 30));
  console.log("Original Employee Object after non-destructive update:", employee);
  console.log("Destructively Update Employee:", destructivelyUpdateEmployeeWithKeyAndValue(employee, 'age', 30));
  console.log("Original Employee Object after destructive update:", employee);
  console.log("Delete Key from Employee (Non-destructive):", deleteFromEmployeeByKey(employee, 'name'));
  console.log("Original Employee Object after non-destructive delete:", employee);
  console.log("Destructively Delete Key from Employee:", destructivelyDeleteFromEmployeeByKey(employee, 'name'));
  console.log("Original Employee Object after destructive delete:", employee);
  