import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/AddExpense/NewExpense";
import { useState } from "react";

const INITIAL_DATA = [
  {
    id: "e01",
    desc: "Membeli makanan kucing",
    date: new Date(2021, 5, 7),
    price: 23500,
  },
  {
    id: "e02",
    desc: "Membeli bola basket",
    date: new Date(2021, 4, 17),
    price: 11750,
  },
  {
    id: "e03",
    desc: "Membeli sayuran",
    date: new Date(2020, 1, 24),
    price: 8900,
  },
  {
    id: "e04",
    desc: "Membeli masakan padang",
    date: new Date(2022, 9, 3),
    price: 15000,
  },
];

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  const addedData = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <div>
      <NewExpense addData={addedData} currentData={data} />
      <Expenses data={data} />
    </div>
  );
}

export default App;
