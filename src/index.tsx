import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./mock"
import { Provider } from 'react-redux';
import { store } from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
