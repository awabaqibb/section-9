import { useState } from "react";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import Table from "./components/Table/Table";

function App() {
  const [CalcDataInApp, setCalcDataInApp] = useState([]);

  const gettingCalcData = (formData) => {
    setCalcDataInApp(formData);
    console.log(formData);
  };

  return (
    <div>
      <Header />
      <InputForm gettingCalcData={gettingCalcData} />
      <Table sendingFromInput={CalcDataInApp} />
    </div>
  );
}

export default App;
