// Initial employee object
let employee = {
    name: "John Doe",
    streetAddress: "1234 Elm St"
  };
  
  // Function to update employee with a key and value, returning a new object
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Using spread operator to create a new object with updated key-value pair
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to destructively update employee with a key and value
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Mutating the original employee object
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a property from the employee object, returning a new object
  function deleteFromEmployeeByKey(employee, key) {
    // Using spread operator to return a new object without the deleted key
    const { [key]: removed, ...newEmployee } = employee;
    return newEmployee;
  }
  
  // Function to destructively delete a property from the employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Mutating the original employee object
    delete employee[key];
    return employee;
  }
  
  // Testing the functions
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "5678 Oak St");
  console.log(updatedEmployee); // { name: 'John Doe', streetAddress: '5678 Oak St' }
  console.log(employee); // { name: 'John Doe', streetAddress: '1234 Elm St' }
  
  const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
  console.log(destructivelyUpdatedEmployee); // { name: 'Jane Doe', streetAddress: '1234 Elm St' }
  console.log(employee); // { name: 'Jane Doe', streetAddress: '1234 Elm St' }
  
  const employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log(employeeWithoutAddress); // { name: 'Jane Doe' }
  console.log(employee); // { name: 'Jane Doe', streetAddress: '1234 Elm St' }
  
  const destructivelyDeletedEmployee = destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log(destructivelyDeletedEmployee); // { streetAddress: '1234 Elm St' }
  console.log(employee); // { streetAddress: '1234 Elm St' }
  
