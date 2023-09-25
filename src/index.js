import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 0,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <header className="header">
        <h1>Fast React pizza</h1>
      </header>
    </div>
  );
}

function Menu() {
  const checkLen = pizzaData.length;
  return (
    <div>
      <h2
        className="menue"
        style={{ textAlign: "center", fontSize: "3rem", margin: "1rem" }}
      >
        Our Menue
      </h2>
      {checkLen > 0 ? (
        <ul className="piz">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>sss</p>
      )}
    </div>
  );
}
function Footer() {
  const openningHour = 9;
  const closingHour = 24;
  const hour = 8; //new Date().getHours();
  const isOpen = hour >= openningHour && hour <= closingHour;
  console.log(isOpen);
  console.log(isOpen);

  console.log(hour);

  return (
    <div>
      <footer className="footer" style={{ color: "red" }}>
        {isOpen ? (
          <Order closingHour={closingHour} />
        ) : (
          <p>
            We're Happay to welcome u between {openningHour}:00 AM &&{" "}
            {closingHour}:00 AM
          </p>
        )}
      </footer>
    </div>
  );
}
function Pizza({ pizzaObj }) {
  //if (props.pizzaObj.soldOut) return null;
  return (
    <div className={`pizza ${pizzaObj.price <= 0 ? "sold-out" : ""}`}>
      <li className="img-holder">
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      </li>
      <li className="details">
        <p className={`piz ${pizzaObj.price <= 0 ? "remove" : ""}`}>
          <strong>{pizzaObj.name}</strong>
        </p>
        <p>
          <b>ingredients:</b> {pizzaObj.ingredients}
        </p>
        <p>
          <strong>
            {pizzaObj.price <= 0 ? "SOLD OUT" : `Price ${pizzaObj.price}`}
          </strong>
        </p>
      </li>
    </div>
  );
}
function Order(props) {
  return (
    <div style={{ margin: "2rem" }}>
      <p>
        {" "}
        we're open until {props.closingHour}:00. come visit us or order now
      </p>
      <button
        style={{
          background: "black",
          color: "white",
          fontWeight: "bolder",
          padding: "10px",
          border: "none",
          borderRadius: "10%",
          margin: "1rem",
          cursor: "pointer",
        }}
      >
        Order
      </button>
    </div>
  );
}
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
