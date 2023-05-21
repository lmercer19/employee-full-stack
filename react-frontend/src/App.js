import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router";
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className="container">
              <Routes>
                <Route exact path = "/" component = {<ListEmployeeComponent/>}></Route>
                <Route path = "/employees" component = {<ListEmployeeComponent/>}></Route>
                <Route path = "/add-employee" component = {<CreateEmployeeComponent/>}></Route>
              </Routes>
            <ListEmployeeComponent />
          </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
