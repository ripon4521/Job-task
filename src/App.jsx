import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import PopularCard from "./components/PopularCard";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Banner/>
      <PopularCard/>
    </div>
  );
}

export default App;
