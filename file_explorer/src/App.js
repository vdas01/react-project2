import logo from './logo.svg';
import './App.css';
import Folder from './components/Folder';
import explorer from './data/folderData';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(explorer);
  return (
    <div className="App">
       <Folder data={data}/>
    </div>
  );
}

export default App;
