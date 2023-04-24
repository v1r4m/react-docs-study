import { Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout";
import Event1 from "./pages/Event1";
import Event2 from "./pages/Event2";
import Event3 from "./pages/Event3";
import Home from "./pages/Home";
import NoMatch from "../Components/NoMatch";
import State1 from "./pages/State1";
import State2 from "./pages/State2";

export default function Week2() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/event1" element={<Event1 />} />
        <Route path="/event2" element={<Event2 />} />
        <Route path="/event3" element={<Event3 />} />
        <Route path="/state1" element={<State1 />} />
        <Route path="/state2" element={<State2 />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
