import './App.css';
import NewUserRegistration from './components/NewUserRegistration';
import { BrowserRouter as Router } from 'react-router-dom';
// import { motion } from 'framer-motion';
function App() {
  return (
    
    <Router>
    <div className="App">
       {/* <motion.h1 
         animate={{x: 10, y: -10}}> */}
         <h1> Dance workout Registration</h1> 
            {/* </motion.h1> */}
             <NewUserRegistration/>
    </div>
    </Router> 
  );
}

export default App;
