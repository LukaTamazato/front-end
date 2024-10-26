import Layout from './layouts/Layout';
import { UserProvider } from './context/UserContext';
import { BrowserRouter as Router } from "react-router-dom";
import { CollapsedProvider } from './context/CollapsedContext';

function App() {
  return (
    <div>
      <UserProvider>
        <CollapsedProvider>
          <Router>
            <Layout />
          </Router>
        </CollapsedProvider>
      </UserProvider>
    </div>
  )
}

export default App;
