import "./index.css";

const Contact = () => {
  return (
    <div className="shop-contact-page">
      <div className="shop-contact-meta-wrapper">
        <div className="shop-contact-meta">
          <h1>Contact Us</h1>
          <p>Lorem ipsum dolor sit amet</p>
          <form className="shop-contact-form">
            <p className="shop-field-text">Name</p>
            <input type="text" className="shop-field-input" placeholder="" />
            <p className="shop-field-text">Email</p>
            <input type="text" className="shop-field-input" placeholder="" />
            <p className="shop-field-text">Phone</p>
            <input type="text" className="shop-field-input" placeholder="" />
            <p className="shop-field-text">Message</p>
            <input type="text" className="shop-field-input" placeholder="" />
          </form>
          <button className="shop-field-btn">Send</button>
        </div>
      </div>
      <div className="shop-contact-image">{/* images */}</div>
    </div>
  );
};
export default Contact;
