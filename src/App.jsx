
import axios from 'axios';
import './App.css'

function App() {
 const SendMessage =(event)=>{
      event.preventDefault();
   const token = "6760074363:AAG5oBjXnm9O2E0PGwDihFH5eArxYuyqxk0";
   const chat_id = 5376061460;
   const url = `https://api.telegram.org/bot${token}/sendMessage`;
   const name = document.getElementById("name").value; 
   const surname = document.getElementById("surname").value; 
   const textcontent = `Ismi:${name} \nFamiliya:${surname}`;
   
    
   axios({
    url:url,
    method:'POST',
    data:{
     "text":textcontent,
     "chat_id":chat_id
     }
   }).then((res)=>{
    alert("muvofaqqiyatli")

   }).catch((error)=>{
    console.log("yuborishda xatolik", error);
   })
 }

  return (
    <>
      <form id="myForm" onSubmit={SendMessage}>
        <label htmlFor="">Name</label>
        <input type="text" id="name" />
        <br/>
        <label htmlFor="">Surname</label>
        <input type="text" id="surname" />
        <br />
        <button type='submit'>yuborish</button>
      </form>
    </>
  )
}

export default App


