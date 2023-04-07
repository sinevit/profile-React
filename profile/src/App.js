import './App.css';
import { Profile } from './components/Profile/Profile';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.AppData.sideBar}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Profile profilePage={props.AppData.profilePage} 
                      dispatch={props.dispatch} />} />
            <Route path='/dialogs/*' element={<Dialogs dialogsPage = {props.AppData.dialogsPage} 
                      dispatch={props.dispatch}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
