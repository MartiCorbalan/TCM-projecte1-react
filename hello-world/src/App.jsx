import React from "react";
import "./App.css";
import "./css/Style.css";
import HelloWorld from "./components/HelloWorld";
import Hello from "./components/Hello";
import Box from "./components/Box";
import Navbar from "./components/Navbar";

/* function HelloWorld() {
  return <h1>Hello World</h1>;
} */

function App() {
  let corba = "Marti";

  return (
    <>
      <Navbar />
      <div className="App">
        <HelloWorld />
        <p>Mi primera app web</p>
        {/* <Hello nom="Pere" /> */}
        <Hello nom={corba} />
        {/* <Hello nom={<strong>Paul</strong>} /> */}
        <Box>
          <h1 className="mt-2">Holaaaaaaa</h1>
        </Box>
      </div>
    </>
  );
}

export default App;
