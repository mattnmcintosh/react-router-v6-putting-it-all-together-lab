import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <NavBar />
      <main style={{ textAlign: "center", padding: "2rem" }}>
        <h1>404 - Page Not Found 🎬</h1>
        <p>Oops! The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/">Go Back to Home</Link>
      </main>
    </>
  );
}

export default ErrorPage;