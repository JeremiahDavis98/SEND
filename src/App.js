import logo from './logo.svg';
import './App.css';
import Page from './Page';
import Auth from './Auth';

function App() {
  const [isLoggedIn, setItLoggedIn] = useState(Auth.isAuthenticated())
  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default App;
