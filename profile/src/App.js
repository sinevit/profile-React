import './App.css';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Profile />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/users/*' element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
