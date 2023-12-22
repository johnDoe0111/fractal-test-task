import Onboarding from "pages/onboarding-page/Onboarding"
import MainPage from "pages/sign-up-page/SignUpPage"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  )
}

export default App
