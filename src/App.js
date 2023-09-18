import Layout from "./components/Layout/Layout";
import Form from "./components/Form/Form";
import { Routes, Route } from "react-router-dom";
import FormContextProvider from "./context/FormContext";

function App() {
  return (
    <FormContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Form />} />
        </Route>
      </Routes>
    </FormContextProvider>
  );
}

export default App;
