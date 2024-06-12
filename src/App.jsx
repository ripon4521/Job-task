import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import PopularCard from "./components/PopularCard";
import RecomandedCard from "./components/RecomandedCard";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Banner/>
      <PopularCard/>
      <RecomandedCard/>
    </div>
  );
}

export default App;
