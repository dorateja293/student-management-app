import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="content"><Outlet /></main>
    </div>
  );
}
export default App;