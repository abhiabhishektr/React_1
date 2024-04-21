import React from 'react';
// component 
// Define a functional component named Person
const Person = (props) => {
    return (
        <>
            {/* Display the name passed via props */}
            <h1>Name: {props.name}</h1>
            {/* Display static last name */}
            <h2>Last Name: {props.lastName}</h2>
            {/* Display static age */}
            <h2>Age: {props.age}</h2>
        </>
    );
}
// props
// Define the main App component
function App() {
    return (
        <div className="app">
            {/* Render two instances of the Person component with different names */}
            <Person
             name='john'
             lastName='doe'
             age={24}
              />
            <Person name={'Abhishek'} />
        </div>
    );
}

export default App;


//states 
//hooks
// import React, { useState } from "react";
// import './App.css';

// function App() {
//     const [counter, setCount] = useState(0);

//     return (
//         <div className="App">
//             <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
//             <h1>{counter}</h1>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
//         </div>
//     );
// }

// export default App;
