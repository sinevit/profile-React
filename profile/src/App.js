import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import { Navbar } from './components/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// import DialogsContainer  from './components/Dialogs/DialogsContainer';
// import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { Preloader } from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path='/profile/:userId?' element={<ProfileContainer />} />
              <Route path='/dialogs' element={<DialogsContainer />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Suspense>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
