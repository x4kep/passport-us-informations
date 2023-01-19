import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import TermsConditions from "./components/terms-conditions/terms-conditions.component";
import Main from "./components/main/main.component";

const Support = () => {
  return <h1>Support</h1>;
};

const PolicyPrivacy = () => {
  return <h1>PolicyPrivacy</h1>;
};

const PolicyRefund = () => {
  return <h1>PolicyRefund</h1>;
};

const LegalDisclaimer = () => {
  return <h1>LegalDisclamer</h1>;
};

const ContactUs = () => {
  return <h1>ContactUs</h1>;
};

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/policy-privacy" element={<PolicyPrivacy />} />
        <Route path="/policy-refund" element={<PolicyRefund />} />
        <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
