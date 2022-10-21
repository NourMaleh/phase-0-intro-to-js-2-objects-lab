// Write your solution in this file!
const employee = {
    name: "sam",
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return { ...obj,[key]: value, };

  }
  const newEmployee =updateEmployeeWithKeyAndValue(employee,"streetAddress", '11 Broadway');



  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
  }

  function deleteFromEmployeeByKey(employee, key){
   let newEmployeee = {...employee}
  delete newEmployeee[key];
  return newEmployeee;
  }
  const newEmployeee =deleteFromEmployeeByKey(employee, "sam");


  function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];
    return employee;
  }
  
  
