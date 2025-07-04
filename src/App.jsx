// import Page from "./components/sections/Page";
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import Review from "./components/sections/Review";
import Main from "./components/sections/Main";
import Logos from "./components/sections/Logos";
import Features from "./components/sections/features";
import FAQs from "./components/sections/FAQs/FAQs";
import Testimonials from "./components/sections/Testimonials/Testimonials";
import Footer from "./components/sections/Footer";
import Model from "./components/sections/Model/Model";
import SignUpModel from "./components/sections/Model/SignUpModel";
import { ModelContextProvider } from "./context/ModelContext";

function App() {
  return (
    <ModelContextProvider>
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
          <Testimonials />
        </Main>

        <Footer />

        <Model model="sign-up">
          <SignUpModel />
        </Model>
      </h1>
    </ModelContextProvider>
  );
}

export default App;
