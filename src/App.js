import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import MyTask from './components/MyTask/MyTask';
import AddTask from './components/AddTask/AddTask';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/mytask' element={
          <RequireAuth>
            <MyTask />
          </RequireAuth>}>
        </Route>
        <Route path='/addtask' element={
          <RequireAuth>
            <AddTask />
          </RequireAuth>}>
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
