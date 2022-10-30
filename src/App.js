import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <h1 className="text-3xl text-blue-600">
      Hello world! <Link to="https://tailwindcss.com/docs/guides/create-react-app" title='Click'>Installation Guide</Link>
    </h1>
  )
}
