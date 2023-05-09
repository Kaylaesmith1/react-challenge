import css from './App.module.css';
// import Sidebar from './components/Sidebar';
// import NavBarSimple from './components/NavBarSimple';
// import NavBarForm from './components/NavBarForm';
import Content from './components/Content';
// import ControlledForm from './components/ControlledForm';
// import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <Sidebar/> */}
      {/* <NavBarSimple/> */}
      {/* <NavBarForm/> */}
      <Content/>
      {/* <ControlledForm/> */}
      {/* <UncontrolledForm/> */}
      {/* <SearchBar/> */}
    </div>
  );
}

export default App;