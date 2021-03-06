import React, {useState} from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import './_app.scss';

const App = () => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar(sidebar => !sidebar);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className="app_container">
        <Sidebar visible={sidebar} handleToggleSidebar={handleToggleSidebar}/>
        <Container fluid className="app_main">
          <HomeScreen/>
        </Container>
      </div>
    </>
  );
};

export default App;
