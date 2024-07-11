import "../public/css/bw-lux.min.css";
import Inicio from "./components/Inicio/Inicio";
import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";
Inicio;
function App() {
  return (
    <>
      <Header></Header>
      <Inicio></Inicio>
      <Footer></Footer>
    </>
  );
}

export default App;
