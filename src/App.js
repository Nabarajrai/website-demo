import HomePage from "../src/pages/HomePage";
import Layout from "../src/components/Layout";
import Slider from "./components/Slider";
import Slick from "./components/Slick";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
      {/* <Header />
      <Slick />
      <div style={{ height: "500px" }}></div> */}
    </>
  );
}

export default App;
