import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';


function App() {
  return (
    <div className="App">
      根组件
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
