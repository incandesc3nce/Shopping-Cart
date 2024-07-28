import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import CartItems from '../CartItems/CartItems';

const Cart = ({ items }: any) => (
  <>
    <Navbar />
    <div className="min-h-screen">
      <CartItems />
    </div>
    <Footer />
  </>
);

export default Cart;
