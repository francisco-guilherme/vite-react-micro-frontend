import { Route, Routes } from "react-router-dom";

function Home() {
  return <div>Home of RemoteB</div>;
}

function About() {
  return <div>About of RemoteB</div>;
}

function Contact() {
  return <div>Contact of RemoteB</div>;
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
