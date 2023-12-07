"use client";

function ChooseTicket({ updateTickets, tickets, showError }) {
  return (
    <div className={`choose-wrapper tick ${showError ? "showError" : ""}`}>
      <h2>CHOOSE YOUR TICKETS</h2>
      <div className="counter-line">
        <h3>ALL WEEK TICKET</h3>
        <div className="counter">
          <button onClick={() => updateTickets("remove")}>-</button>
          <p>{tickets}</p>
          <button onClick={() => updateTickets("add")}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ChooseTicket;
