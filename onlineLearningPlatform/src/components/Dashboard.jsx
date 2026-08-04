import CourseCatalog from './CourseCatalog'

function Dashboard({ studentInfo, setEnrolledCount }) {

  return (
    <div>

      <h1>Student Dashboard</h1>

      <CourseCatalog
        studentInfo={studentInfo}
        setEnrolledCount={setEnrolledCount}
      />

    </div>
  )
}

export default Dashboard