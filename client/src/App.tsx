/**
 * Renders the main application layout and defines routing for different pages.
 * @module App
 * @author Oleksandr Turytsia
 */
import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Map from "./pages/Map/Map";
import NavPanel from "./components/NavPanel/NavPanel";
import Main from "./components/Main/Main";
import StepsContainer from "./pages/Map/components/StepsContainer/StepsContainer";
import StepInfo from "./pages/Map/components/StepInfo/StepInfo";
import Layers from "./pages/Map/components/Layers/Layers";

/** The root element for floating components. */
export const floatingRoot = document.getElementById("portal")

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Main>
        <NavPanel />
        <Routes>
          <Route path="/" element={<Map />}>
            <Route index element={
              <StepsContainer>
                  <StepInfo />
              </StepsContainer>
            } />
            <Route path="layers" element={
              <Layers />
            } />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App