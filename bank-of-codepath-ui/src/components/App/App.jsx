import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionDetail from "../TransactionDetail/TransactionDetail";

export default function App(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [transfers, setTransfers] = useState([]);
  const [errors, setErrors] = useState(null);
  const [filterInputValue, setFilterInputValue] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [newTransactionForm, setNewTransactionForm] = useState({
    category: "",
    description: "",
    amount: 0,
  });

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar
          filterInputValue={filterInputValue}
          setFilterInputValue={setFilterInputValue}
        />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  transactions={setTransactions}
                  transfers={transfers}
                  setTransfers={setTransfers}
                  errors={errors}
                  setErrors={setErrors}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  filterInputValue={filterInputValue}
                  isCreating={isCreating}
                  setIsCreating={setIsCreating}
                  newTransactionForm={newTransactionForm}
                  setNewTransactionForm={setNewTransactionForm}
                />
              }
            />
            <Route
              path="/transaction/:transactionId"
              element={<TransactionDetail />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
