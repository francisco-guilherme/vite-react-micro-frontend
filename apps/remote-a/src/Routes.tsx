import { Route, Routes } from "react-router-dom";

function Home() {
  return <div>Home of RemoteA</div>;
}

function About() {
  return <div>About of RemoteA</div>;
}

function Contact() {
  return <div>Contact of RemoteA</div>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
