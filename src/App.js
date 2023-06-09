import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import Login from "./login/Login";
import Register from "./register/Register";
import Messages from "./messages/Messages";
import NotFound from "./special pages/notFound";
import NewChatModal from "./newChatModal/newChatModal";

function App() {
  const storedUsers = JSON.parse(localStorage.getItem('users')) || {};
  const [users, setUsers] = useState(storedUsers)
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login users={users} setUsers={setUsers} currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      <Route path="/login" element={<Login users={users} setUsers={setUsers} currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      <Route path="/register" element={<Register users={users} setUsers={setUsers} />} />
      <Route path="/messages" element={<Messages users={users} setUsers={setUsers} currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
      <NewChatModal users={users} setUsers={setUsers} currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </BrowserRouter>
  );
}

export default App;
