import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import TermsConditions from "./components/terms-conditions/terms-conditions.component";
import Main from "./components/main/main.component";
import Summary from "./components/summary/summary.component";
import LiveHelp from "./components/live-help/live-help.component";
import PolicyPrivacy from "./components/policy-privacy/policy-privacy.component";
import PolicyRefund from "./components/policy-refund/policy-refund.component";
import LegalDisclaimer from "./components/legal-disclaimer/legal-disclaimer.component";
import RefundPolicy from "./components/refund-policy/refund-policy.component";
import VisaDetails from "./components/visa-details/visa-details.component";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/visa-details" element={<VisaDetails />} />
        <Route path="/live-help" element={<LiveHelp />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/policy-privacy" element={<PolicyPrivacy />} />
        <Route path="/policy-refund" element={<PolicyRefund />} />
        <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
