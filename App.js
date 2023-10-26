import './App.css';
import UserData from './UserData';
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
function App() {
  return (
    <div>
     <UserData apiUrl={apiUrl}/>
    </div>
  );
}

export default App;
