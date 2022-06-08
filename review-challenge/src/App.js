import "./App.css";
import Header from "./components/Header";
import ReviewSection from "./components/ReviewSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      {/* <header className='App-header'></header> */}
      <Header />
      <ReviewSection />
    </div>
  );
}

export default App;
