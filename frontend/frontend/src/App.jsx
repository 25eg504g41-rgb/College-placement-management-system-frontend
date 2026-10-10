import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StudentRegistration from "./pages/StudentRegistration";
import StudentLogin from "./pages/StudentLogin";
import StudentProfile from "./pages/StudentProfile";
import Applications from "./pages/Applications";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [profile, setProfile] = useState({
    phone: "",
    branch: "",
    year: "",
  });
  const [applications, setApplications] = useState([]);

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home setPage={setPage} />;
      case "register":
        return (
          <StudentRegistration
            student={student}
            setStudent={setStudent}
            setPage={setPage}
          />
        );
      case "login":
        return <StudentLogin setPage={setPage} />;
      case "profile":
        return (
          <StudentProfile
            student={student}
            profile={profile}
            setProfile={setProfile}
            setPage={setPage}
          />
        );
      case "applications":
        return (
          <Applications applications={applications} setPage={setPage} />
        );
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="App">
      <Navbar setPage={setPage} />
      {renderPage()}
    </div>
  );
}

export default App;