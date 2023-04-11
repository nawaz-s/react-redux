import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
// import CakeContainer from './components/CakeContainer';
// import HooksCakeContainer from './components/HooksCakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import NewCakeContainer from './components/NewCakeContainer';
// import ItemContainer from './components/ItemContainer';
//import UserContainer from './components/UserContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { UserProvider } from './components/context/UserProvider';
//import Page from './components/context/Page';
//import Profile from './components/context/Profile';
import FunctionalApp from './components/context/FunctionalApp';
import ClassApp from './components/context/ClassApp';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer /> */}
        {/* <UserContainer /> */}
        {/* <UserProvider>
          <Page />
          <Profile />
        </UserProvider> */}
        <FunctionalApp />
        <ClassApp />
      </div>
    </Provider>
  );
}

export default App;
