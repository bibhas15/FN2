const employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
   const developers = employees.filter(employee => employee.profession === 'developer');
  developers.map(developer => console.log(developer));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  employees.forEach(employee => {
    if (employee.profession === 'developer') {
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = {id: 4, name: "susan", age: "20", profession: "intern"};
  employees.push(newEmployee);
  console.log(employees);
}

function removeAdmin() {
  //Write your code here, just console.log
  const updatedEmployees = employees.filter(employee => employee.profession !== 'admin');
  console.log(updatedEmployees);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    {id: 4, name: "emma", age: "22", profession: "designer"},
    {id: 5, name: "mike", age: "24", profession: "manager"},
    {id: 6, name: "lisa", age: "21", profession: "developer"}
  ];

  const concatenatedArray = employees.concat(newArray);
  console.log(concatenatedArray);
}