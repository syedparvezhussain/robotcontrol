import React, {useEffect, useState} from 'react';
import { io } from "socket.io-client";
import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header"
import LeftPanal from './components/LeftPanal';
import Main from './components/Main';
function App() {
  const [dataIncoming, setData] = useState({})

  useEffect(()=>{
    const socket = io("http://172.18.161.245:5001");
    socket.on("connect", () => console.log(socket.id));
    socket.on("connect_error", () => {
      setTimeout(() => socket.connect(), 5000);
    });
    socket.on("Event", (data) => {
console.log(data)
setData(data)

    }
      );
    socket.on("disconnect", () => setData("server disconnected"));
  },[])

  return (
    <div className="App">
<Header/>
<LeftPanal/>
<Main status="online" data={dataIncoming}/>
<Footer/>
    </div>
  );
}

export default App;
