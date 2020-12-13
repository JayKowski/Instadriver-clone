// import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import LeftSideBar from './components/sidePurpleBar/LeftSideBar';
import ChatNavDiv from './components/chatNavDiv/ChatNavDiv';
import ConverseDiv from './components/ConverseDiv/ConverseDiv';
import PageFooter from './components/pageFooter/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <div className="content-container">
          <LeftSideBar />
          <div className="mini-container">
            <ChatNavDiv />
            <ConverseDiv />
          </div>
        </div>
        <PageFooter />
    </div>
  );
}

export default App;
