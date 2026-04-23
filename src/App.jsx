import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";

import Home from "./pages/Home";
import Arthroscopy from "./pages/patients/Arthroscopy";
import MeniscusInjury from "./pages/patients/MeniscusInjury";
import ACLInjury from "./pages/patients/ACLInjury";
import PCLInjury from "./pages/patients/PCLInjury";
import FootballersAnkle from "./pages/patients/FootballersAnkle";
import FrozenShoulder from "./pages/patients/FrozenShoulder";
import Gallery from "./components/Gallery";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', 'DM Sans', sans-serif",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients/arthroscopy" element={<Arthroscopy />} />
        <Route path="/patients/meniscus-injury" element={<MeniscusInjury />} />
        <Route path="/patients/acl-injury" element={<ACLInjury />} />
        <Route path="/patients/pcl-injury" element={<PCLInjury />} />
        <Route path="/patients/footballers-ankle" element={<FootballersAnkle />} />
        <Route path="/patients/frozen-shoulder" element={<FrozenShoulder />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </ThemeProvider>
  );
}