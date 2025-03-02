import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import List from './List.jsx'
import Button from './Button.jsx'
function App() {
  const fruits =[
    {id:1,name:"Apple",calorires:9000},
    {id:2,name:"Orange",calorires:98},
    {id:3,name:"Coconut",calorires:422}];
  return (
  <>
  <Header></Header> 
  <List items={fruits} category="Fruits"/>
  <Button></Button>

  <Card></Card>
  <Card></Card>
  <Card></Card>

  <Footer></Footer>
  {/* <listItems></listItems> */}
  {/* <List></List> */}

  </>

);
  
}

export default App
