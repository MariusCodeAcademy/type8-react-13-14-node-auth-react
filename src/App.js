import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostsPage from './pages/PostsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header/Header';

function App() {
  // console.log('process.env.REACT_APP_BACKEND_URL', process.env.REACT_APP_BACKEND_URL);

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path={'/register'}>
          <RegisterPage />
        </Route>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        <Route path={'/posts'}>
          <PostsPage />
        </Route>
        <Route exact path={'/'}>
          <HomePage />
        </Route>
        <Route path={'*'}>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
