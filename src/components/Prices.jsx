import "../styles/Prices.css";

function Prices() {
  return (
    <section className="prices">
      <h2 className="prices-heading">Festival Prices</h2>
      <article className="ticket-prices">
        <div className="ticket-price">
          <div>
            <h3>Regular Ticket</h3>
            <p>799 DKK</p>
          </div>
          <p>For people who wish to immerse themselves in the music without breaking the piggy bank.</p>
          <ul className="ticket-includes">
            <li>
              <div className="heart-container">
                <svg className="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.05 73.54">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <polyline className="cls-1" points="45.02 73.18 16.86 45.02 .55 28.71 6.22 5.95 28.71 .55 45.02 16.86 61.33 .55 83.82 5.95 89.49 28.71 73.18 45.02 45.03 73.18" />
                  </g>
                </svg>
              </div>
              <p>Full access to all stages and performances.</p>
            </li>
            <li>
              <div className="heart-container">
                <svg className="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.05 73.54">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <polyline className="cls-1" points="45.02 73.18 16.86 45.02 .55 28.71 6.22 5.95 28.71 .55 45.02 16.86 61.33 .55 83.82 5.95 89.49 28.71 73.18 45.02 45.03 73.18" />
                  </g>
                </svg>
              </div>
              <p>Free tent and guaranteed spot in one of our 5 camping areas.</p>
            </li>
          </ul>
        </div>
        <div className="ticket-price">
          <div>
            <h3 className="vip">VIP Ticket</h3>
            <p>1299 DKK</p>
          </div>
          <p>For people who wish to elevate their festival experience with unique access to all that Foofest offers.</p>
          <ul className="ticket-includes">
            <li>
              <div className="heart-container">
                <svg className="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.05 73.54">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <polyline className="cls-1" points="45.02 73.18 16.86 45.02 .55 28.71 6.22 5.95 28.71 .55 45.02 16.86 61.33 .55 83.82 5.95 89.49 28.71 73.18 45.02 45.03 73.18" />
                  </g>
                </svg>
              </div>
              <p>Full access to all stages and performances.</p>
            </li>
            <li>
              <div className="heart-container">
                <svg className="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.05 73.54">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <polyline className="cls-1" points="45.02 73.18 16.86 45.02 .55 28.71 6.22 5.95 28.71 .55 45.02 16.86 61.33 .55 83.82 5.95 89.49 28.71 73.18 45.02 45.03 73.18" />
                  </g>
                </svg>
              </div>
              <p>Free tent and guaranteed spot in one of our 5 camping areas.</p>
            </li>
            <li>
              <div className="heart-container">
                <svg className="heart-icon vip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.05 73.54">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <polyline className="cls-1" points="45.02 73.18 16.86 45.02 .55 28.71 6.22 5.95 28.71 .55 45.02 16.86 61.33 .55 83.82 5.95 89.49 28.71 73.18 45.02 45.03 73.18" />
                  </g>
                </svg>
              </div>
              <p>Full access to all events.</p>
            </li>
            <li>
              <div className="heart-container">
                <svg className="heart-icon vip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.05 73.54">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <polyline className="cls-1" points="45.02 73.18 16.86 45.02 .55 28.71 6.22 5.95 28.71 .55 45.02 16.86 61.33 .55 83.82 5.95 89.49 28.71 73.18 45.02 45.03 73.18" />
                  </g>
                </svg>
              </div>
              <p>Dish of the day + cold beverage everyday included.</p>
            </li>
          </ul>
        </div>
      </article>
      <article className="camping-prices">
        <div className="tent-prices">
          <div className="tent-price">
            <div>
              <h3>1-Person Tent</h3>
              <p>Free with purchase of ticket*</p>
            </div>
            <p>Pay 199 DKK to have our crew set up the tent for you.</p>
          </div>
          <div className="tent-price">
            <div>
              <h3>2-Person Tent</h3>
              <p>Free with purchase of ticket*</p>
            </div>
            <p>Pay 299 DKK to have our crew set up the tent for you.</p>
          </div>
          <div className="tent-price">
            <div>
              <h3>3-Person Tent</h3>
              <p>Free with purchase of ticket*</p>
            </div>
            <p>Pay 399 DKK to have our crew set up the tent for you.</p>
          </div>
          <p>*Offer limited to 1x tent per ticket. Example: 2 tickets grants you either 2x 1-person tent, or 1x 2-person tent.</p>
        </div>
        <div className="additional-prices">
          <h3 className="prices-subheading">Additional prices</h3>
          <div className="additional-price">
            <div>
              <h3>Green Camping</h3>
              <p>249 DKK per tent</p>
            </div>
            <p>Tent made of excellently recycled material, CO2-compensation of your </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Prices;
