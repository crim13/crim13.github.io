import "./index.css";

const Checkout = ({ cartItems }) => {
  const totalPrices = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="shop-checkout-page">
      <div className="shop-checkout-left">
        <div className="shop-checkout-cart">
          <h1 className="shop-checkout-heading">Order summary</h1>
          <p className="shop-checkout-total">Total: ${totalPrices}</p>
          <div className="shop-checkout-cart-items">
            {cartItems.map((item, key) => (
              <div key={key} className="shop-checkout-item">
                <div
                  className="shop-checkout-item-thumbnail"
                  style={{ backgroundImage: `url(${item.thumbnail})` }}
                ></div>

                <div className="shop-checkout-item-title">{item.title}</div>
                <div className="shop-checkout-item-quantity">
                  {item.quantity}
                </div>
                <div className="shop-checkout-item-price">${item.price}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="shop-checkout-shipping-section">
          <h1 className="shop-checkout-heading">Shipping</h1>
          <p className="shop-checkout-total">Select shipping method.</p>
          <div className="shop-checkout-shipping">
            <div className="shop-checkout-shipping-wrapper">
              <p className="shop-checkout-shipping-title">
                Standard Mail Post shipping
              </p>
              <p className="shop-checkout-shipping-time">5-7 working days</p>
            </div>
            <div className="shop-checkout-shipping-price">Free</div>
          </div>
          <div className="shop-checkout-shipping">
            <div className="shop-checkout-shipping-wrapper">
              <p className="shop-checkout-shipping-title">Express shipping</p>
              <p className="shop-checkout-shipping-time">1-3 working days</p>
            </div>
            <div className="shop-checkout-shipping-price">$9.99</div>
          </div>
        </div>
      </div>
      <div className="shop-checkout-right">
        <h1 className="shop-checkout-heading">Payment details</h1>
        <p className="shop-checkout-total">Fill in requested fields.</p>
        <div className="shop-checkout-payment">
          <div className="shop-checkout-form-email">
            <h3>Email address</h3>
            <input type="text" placeholder="example@mail.com" />
          </div>

          <div className="shop-checkout-form-card-details">
            <h3>Card Detail</h3>
            <input
              className="card-number"
              type="text"
              placeholder="Card Number"
            />
            <input className="card-date" type="text" placeholder="MM / YY" />
            <input className="card-cvc" type="text" placeholder="CVC" />
          </div>
          <div className="shop-checkout-form-card-holder">
            <h3 className="shop-checkout-form-tag">Card Holder</h3>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="shop-checkout-form-address">
            <h3 className="shop-checkout-form-tag">Billing Address</h3>
            <input className="address-line" type="text" placeholder="Address" />
            <input
              className="address-country"
              type="text"
              placeholder="Country"
            />
            <input
              className="address-postal-code"
              type="text"
              placeholder="Postal Code"
            />
          </div>

          <div className="shop-checkout-form-text">
            <p>Subtotal</p>
            <p>${totalPrices}</p>
          </div>
          <div className="shop-checkout-form-text">
            <p>Vat (20%)</p>
            <p>${totalPrices * 0.2}</p>
          </div>
          <div className="shop-checkout-form-text">
            <p>Total</p>
            <p>${totalPrices * 1.2}</p>
          </div>
          <button className="shop-checkout-pay-now">Pay now</button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
