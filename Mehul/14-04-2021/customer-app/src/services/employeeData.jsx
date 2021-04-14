const employee = [
  {
    _id: "1234567890",
    empname: "Mehul",
    empSalary: 15000,
    empdepartment: "IT",
  },
  {
    _id: "4567891230",
    empname: "Abhishek",
    empSalary: 18000,
    empdepartment: "IT-1",
  },
  {
    _id: "789456413210",
    empname: "Hardik",
    empSalary: 25000,
    empdepartment: "IT-2",
  },
];

export function getemployee()
{
    return employee;
}

export function getemployeeByid(id) {
  return employee.find(m => m._id === id);
}