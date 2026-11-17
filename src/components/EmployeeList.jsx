import employees from "../data/employeedata";
import EmployeeCard from "./EmployeeCard";
import "../styles/EmployeeList.css";

function EmployeeList() {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <div className="employee-container">
        {employees.map((employee) => (
            
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            role={employee.role}
            email={employee.email}
          />
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
