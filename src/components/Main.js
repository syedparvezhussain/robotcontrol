import React, {useEffect, useState} from 'react'
import Card from './Card'
import Graph from './Graph';
export default function Main({status, data}) {
  const [angle, setAngle] = useState(0);
  const [res, setRes] = useState(0);

  //datacapture
  const [data2, Data2] = useState({});
  const [sound, setSound] = useState(0);
  const [temp, setTemp] = useState(0);
  const [humid, setHumid] = useState(0);
  const [heart, setHb] = useState(0);
  const [ir, setIr] = useState(0);
  const [dist, setDist] = useState(0);
  //array of messages
  const [arr, setArrayOfValues] = useState([]); 
  useEffect(()=>{

    const x = {
      sound:data.sound || sound,
      heart:data.heart || heart,
      ir:data.ir || ir,
      temp:data.temp || temp,
      humid:data.humid || humid,
      dist:data.dist || dist     
     }
    
     let array2 = arr
     array2.push(x)
     if(array2.length>40){
      
      array2= array2.slice(20,40);
      
     }
     
     Data2(x)
    if(data.sound){
      setSound(Number(data.sound));
  
     
     }
      if(data?.ir){
      setIr(Number(data.ir));
     }
      if(data.temp){
      setTemp(Number(data.temp));
     
  
     }
      if(data.heart){
      setHb(Number(data.heart));
  
     }
     if(data.dist){
      setDist(Number(data.dist));
    
     }
     if(data.humid){
      setHumid(Number(data.humid));
     
     }
     setArrayOfValues(array2)
  },[data])
  // console.log("shwo this",sound, temp, ir, humid, dist, heart )
  async function handleSetAngle(){
    const url = "http://172.18.161.245:5000/setServoAngle?angle="+angle
    const res= await fetch(url);
    const resp = await res.text();
    setRes(resp)
  }
  console.log(arr)

  return (
    <div className='main'>
    <div className='cardContainer'>
    <Card title={"IR Sensor"} value ={data2.ir}/>
    <Card title={"Heartbeat"} value ={data2.heart}/>
    <Card title={"Temperature"} value ={data2.humid}/>
    <Card title={"Sound"} value ={data2.sound}/>
    <Card title={"Humidity"} value ={data2.temp}/>
    <Card title={"Distance"} value ={data2.dist}/>
    </div>

    <div>
<Graph arrayOfValues={arr}/>


    <div className='servoControl'>
    
    Enter the angle of servo motor
    <input type="text" onChange={(e)=>{
      const angle = Number(e.target.value )
      if(isNaN(angle)){
alert("please enter a number")
      }
      else if(angle>180 || angle <0){
        alert("please enter between 180 and 0")
      }
      else if(!isNaN(angle) && !(angle>180 || angle <0) ){
        setAngle(angle)
      }
     }}/>

     <button onClick={()=>{handleSetAngle()}}>set Angle</button>

     <h3> current value of the servo = {res}</h3>
    </div>
    </div>
    </div>
  )
}
