import "./css/globals.css";
import OnboardingPage from "pages/onboarding-page/OnboardingPage";
import SignUpPage from "pages/sign-up-page/SignUpPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
    </Routes>
  );
}

export default App;
