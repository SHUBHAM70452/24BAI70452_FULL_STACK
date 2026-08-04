function CourseList({ setEnrolledCount }) {

  function handleEnroll() {
    setEnrolledCount((prevCount) => prevCount + 1)
  }

  return (
    <div>

      <p>
        React Basics
        &nbsp;&nbsp;&nbsp;
        ₹999
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleEnroll}>
          Enroll
        </button>
      </p>

      <p>
        Node.js Essentials
        &nbsp;&nbsp;&nbsp;
        ₹1199
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleEnroll}>
          Enroll
        </button>
      </p>

      <p>
        UI/UX Design
        &nbsp;&nbsp;&nbsp;
        ₹799
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleEnroll}>
          Enroll
        </button>
      </p>

    </div>
  )
}

export default CourseList