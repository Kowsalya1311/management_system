import "../styles/EmployeeCard.css";

function EmployeeCard({ name , role, email }) {
  return (
    <div className="employee-card">
      <h3>name : {name}</h3>
      <p>role : {role}</p>
      <p>email : {email}</p>
    </div>
  );
}

export default EmployeeCard;