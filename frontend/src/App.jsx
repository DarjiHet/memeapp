import './App.css'
import Router from './componets/Router'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./Action/userAction"; // import your action

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Router/>
    </>
  )
}

export default App
