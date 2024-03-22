import "./App.css";
import EventActions from "./components/EventActions";
import Home from "./components/Home";
import { Instructor } from "./components/Instructor";
import { List } from "./components/List";
import { Request } from "./components/Request";

function App() {
  const instructor = {
    firstname:'Mehmet Zeki',
    lastName:'KARA',
  };

  const instructorList =[
    {
      firstname:'Mehmet Zeki',
      lastName:'KARA',
    },
    {
      firstname:'Seda',
      lastName:'KARA',
    }
  ] 
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home
          name="Mehmet Zeki KARA"
          age={27}
          isMarried={false}
          birthdaty={new Date()}
        ></Home> */}

        {/* <Instructor  instructorNameLastName={instructor}></Instructor> */}
        {/* <List instList={instructorList}></List> */}
        {/* <Request status={14554}></Request> */}
        <EventActions></EventActions>
      </header>
    </div>
  );
}

export default App;
