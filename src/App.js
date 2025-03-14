import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/main.js";
import Homepage from "./pages/homepage";
import Works from "./pages/works";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/works" element={<Works />} />
      </Routes>
      <SpeedInsights />
    </Layout>
  );
}
