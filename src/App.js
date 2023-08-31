import { useState } from "react";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import Table from "./components/Table/Table";

function App() {
  const [formData, setFormData] = useState([]);

  const sendingFormData = (for