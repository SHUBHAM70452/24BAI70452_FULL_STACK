import { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import StudentProfile from './components/StudentProfile'
import './App.css'

function App() {

  const [enrolledCount, setEnrolledCount] = useState(0)

  const StudentInfo = [
    {
      id: 1,
      Name: "SHUBHAM",
      Age: 21,
      email: "shubham@example.com"
    },
    {
      id: 2,
      Name: "MAX",
      Age: 20,
      email: "Max@example.com"
    },
    {
      id: 3,
      Name: "jack",
      Age: 21,
      email: "jack@example.com"
    }
  ]

  return (
    <div>

      <Navbar
        
        enrolledCount={enrolledCount}
      />

      <Dashboard
        studentInfo={StudentInfo}
        setEnrolledCount={setEnrolledCount}
      />

      <StudentProfile studentInfo={StudentInfo[0]} />
      <StudentProfile studentInfo={StudentInfo[1]} />
      <StudentProfile studentInfo={StudentInfo[2]} />

    </div>
  )
}

export default App