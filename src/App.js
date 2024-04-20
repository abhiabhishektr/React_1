// Importing necessary modules
import Navbar from './Components/Navbar';

// import logo from './logo.svg';  
import './App.css';
let name ='abhishek'
// Functional component named App 
function App() {
    return (
<>
<nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>gg</li>
</nav>
<h3>hello {name}</h3>
<div className="con">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, ducimus facere? Repellendus maiores quod omnis, repudiandae ex corrupti a? Et ad omnis quos dolores. Porro ratione est adipisci nemo a?</p>
</div>
<Navbar/>
</>
    );
}
// Exporting the component
export default App;
