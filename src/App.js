import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DealList from './screens/DealList';
import CreateBlock from './screens/CreateBlock';
import PlanList from './screens/PlanList';
import Files from './screens/Files';

function App() {
    return (
      <Routes>
        <Route path="/" element={<DealList />} />
        <Route path="/createblock" element={<CreateBlock />} />
        <Route path="/planlist" element={<PlanList />} />
        <Route path="/files" element={<Files />} />
      </Routes>
    );
  }

export default App;
