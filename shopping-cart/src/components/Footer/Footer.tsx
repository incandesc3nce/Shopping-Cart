const Footer = () => (
  <footer className="bg-sky-200">
    <div className="flex justify-center mb-4">
      <address className="flex flex-col not-italic">
        <p>Kaws Lane 555, Suite C </p>
        <p>Kaws Louisville; MO 55555-5555</p>
        <p>Phone: 555-555-5555 </p>
        <p>Work hours: 10:00 - 22:00</p>
      </address>
    </div>
    <div className="flex justify-center">
      <p className="text-center">Built by &copy;</p>
      <a
        href="https://github.com/incandesc3nce"
        className="text-purple-600 underline"
      >
        incandesc3nce
      </a>
    </div>
  </footer>
);

export default Footer;
