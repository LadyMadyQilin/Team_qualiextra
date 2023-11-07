import ReactDom from 'react-dom/client';
import App from './components/App/App';

const root = ReactDom.createRoot(document.getElementById('app'));
root.render(<App />);