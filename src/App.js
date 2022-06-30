import './App.css';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom';
import TodoPage from './components/TodoPage';
import Editpage from './components/Editpage';
import TestHooks from './components/TestHooks';
function App() {
  return (
    <div className="App">
       <TestHooks/>
       
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo/:id' element={<TodoPage/>}/>
        <Route path='/todo/edit' element={<Editpage/>}/>
       </Routes>
    </div>
  );
}

export default App;
