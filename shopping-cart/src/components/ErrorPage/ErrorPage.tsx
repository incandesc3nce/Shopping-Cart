import { Link } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';

const ErrorPage = () => (
  <div>
    <Navbar />
    <main className="flex flex-col items-center h-screen">
      <img src="src/assets/home_kaws.jpg" alt="Kaws logo" />
      <div className="flex flex-col items-center justify-center text-2xl">
        <h2>404 Page Not Found</h2>
        <Link to="/" className="underline text-blue-600">
          Back to Home
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default ErrorPage;
