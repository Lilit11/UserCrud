import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserList } from "./features/userlist/userlist";
import { Modal } from "./features/userlist/components/modal";

function App() {
  return (
    <>
      <UserList />
      <Modal/>
    </>
  );
}

export default App;
