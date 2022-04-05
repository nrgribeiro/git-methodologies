import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "react-bootstrap";
import Gallery from "./pages/Gallery";
import "./App.css";

function App() {
  return <ThemeProvider>
    <Gallery />
  </ThemeProvider>;
}

export default App;
