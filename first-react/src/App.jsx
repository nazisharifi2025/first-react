import { BrowserRouter, Routes } from "react-router-dom";

export default function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route index element=<Home /> />
      <Route Path="/about" element=<About /> />
    </Routes>
    </BrowserRouter>
   </div>
  )
}
