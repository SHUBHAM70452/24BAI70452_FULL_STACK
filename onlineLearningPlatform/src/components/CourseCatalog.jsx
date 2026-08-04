import CourseList from './CourseList'

function CourseCatalog({ studentInfo, setEnrolledCount }) {

  return (
    <div>

      <h2>Course Catalog</h2>

      <CourseList
        studentInfo={studentInfo}
        setEnrolledCount={setEnrolledCount}
      />

    </div>
  )
}

export default CourseCatalog