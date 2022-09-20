import { Route, Routes } from "react-router-dom";
import Card from "../../modules/Card";
import Badge from "../../modules/Badge";
import Accordion from "../../modules/Accordion";
import Alerts from "../../modules/Alerts";
import Breadcrumb  from "../../modules/Breadcrumb";
import Buttons from "../../modules/Buttons";
import Close from "../../modules/Close";
import List from "../../modules/List";
import Navs from "../../modules/Navs";
import Spinners from "../../modules/Spinners";
import Progress from "../../modules/Progress";
import Placeholders from "../../modules/Placeholders";
import Pagination from "../../modules/Pagination";
import Dropdowns from "../../modules/Dropdowns";
import ButtonGroup from "../../modules/ButtonGroup";
import Collapse from "../../modules/Collapse";
import Modal from "../../modules/Modal";
import OffCanvas from "../../modules/Offcanvas";
import Popovers from "../../modules/Popovers";
import Tooltips from "../../modules/Tooltips";
import Scrollspy from "../../modules/Scrollspy";
import Toasts from "../../modules/Toasts";
import Navbar from "../../modules/Navbar";

export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<Accordion />}></Route>
      <Route path="/alert" element={<Alerts />}></Route>
      <Route path="/badge" element={<Badge />}></Route>
      <Route path="/breadcrumb" element={<Breadcrumb />}></Route>
      <Route path="/button" element={<Buttons />}></Route>
      <Route path="/button-group" element={<ButtonGroup />}></Route>
      <Route path="/card" element={<Card />}></Route>
      <Route path="/close" element={<Close />}></Route>
      <Route path="/collapse" element={<Collapse />}></Route>
      <Route path="/dropdowns" element={<Dropdowns />}></Route>
      <Route path="/list-group" element={<List />}></Route>
      <Route path="/modal" element={<Modal />}></Route>
      <Route path="/navs-tabs" element={<Navs />}></Route>
      <Route path="/navbar" element={<Navbar />}></Route>
      <Route path="/offcanvas" element={<OffCanvas />}></Route>
      <Route path="/popovers" element={<Popovers />}></Route>
      <Route path="/spinners" element={<Spinners />}></Route>
      <Route path="/pagination" element={<Pagination />}></Route>
      <Route path="/placeholder" element={<Placeholders />}></Route>
      <Route path="/progress" element={<Progress />}></Route>
      <Route path="/scrollspy" element={<Scrollspy />}></Route>
      <Route path="/toasts" element={<Toasts />}></Route>
      <Route path="/tooltips" element={<Tooltips />}></Route>
    </Routes>
  );
}