import Layout from './layouts/Layout';
import { UserProvider } from './context/UserContext';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <UserProvider>
        <Router>
          <Layout />
        </Router>
      </UserProvider>
    </div>
  )
}

export default App;
