import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />

        <footer>
          This project was coded by{" "}
          <a href="" target="_blank">
            Thandiwe Masuku
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/thandiwemasuku/weatherReact"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="netlify.com/"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
