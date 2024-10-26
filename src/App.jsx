import Layout from "./layouts/Layout";
import { UserProvider } from "./context/UserContext";
import { BrowserRouter as Router } from "react-router-dom";
import { CollapsedProvider } from "./context/CollapsedContext";
import { AlertaProvider } from "./context/AlertaContext";

function App() {
  return (
    <div>
      <UserProvider>
        <CollapsedProvider>
          <AlertaProvider>
            <Router>
              <Layout />
            </Router>
          </AlertaProvider>
        </CollapsedProvider>
      </UserProvider>
    </div>
  );
}

export default App;
