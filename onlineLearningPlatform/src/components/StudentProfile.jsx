
const StudentProfile = ({ studentInfo }) => {
  return (
    <div>
      <h2>Student Profile</h2>
      <p>Name: {studentInfo.Name}</p>
      <p>ID: {studentInfo.id}</p>
      <p>Email: {studentInfo.email}</p>
    </div>
  );
};

export default StudentProfile;