// import Page from "./components/sections/Page";ß
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import Review from "./components/sections/Review";
import Main from "./components/sections/Main";
import Logos from "./components/sections/Logos";
import Features from "./components/sections/features";
import FAQs from "./components/sections/FAQs/FAQs";

function App() {
  return (
    <h1>
      <Header>
        <Navigation />
        <Hero />
        <Review />
      </Header>

      <Main>
        <Logos />
        <Features />
        <FAQs />
      </Main>
    </h1>
  );
}

export default App;
