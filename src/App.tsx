import React, {useState} from 'react';
import './App.css';



function App() {

  const [LocationSearch, setLocationSearch] = useState('Paris');

  return (
    <div>
    <h1>Weather App</h1>
    <div>
     <label>
      Add Location <input type="text" value={LocationSearch}/>
      </label>
      <input type="text" value={LocationSearch}
       onChange={e => setLocationSearch(e.target.value)}/>
      <button>Search</button>
    </div>

    <div>
      <h2>Locations</h2>
      <table>
        <thead>
        <tr>
          <th>Name</th>
        </tr>
        </thead>
        <tbody>
        <tr><td>Belfast</td></tr>
        <tr><td>New York</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  );
}




export default App;
