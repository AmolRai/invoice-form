import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import InvoiceForm from "./components/InvoiceForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/invoice-form" element={<InvoiceForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
