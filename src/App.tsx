import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home name="Mehmet Zeki KARA" age={27} isMarried={false} birthdaty={new Date()}></Home>
      </header>
    </div>
  );
}

export default App;
