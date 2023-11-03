import { useEffect } from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home/Home'

function App() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js')
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
