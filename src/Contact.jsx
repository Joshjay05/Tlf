import React,{useState} from 'react'

const Contact = () => {
const [title, setTitle] =useState('');
const [body, setBody] = useState('');
const [email, setEmail] = useState('');
const [problemImage, setProblemImage] = useState('');
const [isBusy, setIsBusy] = useState(false);

const sendMessage = (e) =>{
  e.preventDefault();
  setIsBusy(true);

  const message = new FormData();
  if(problemImage !== " && title !==" && body !== email !== ""){
    message.append('title', title);
    message.append('body', body);
    message.append('email', email);
    message.append("image", problemImage[0]["filename"]);

    const options ={
method:"POST",
body:message,
    }
    
    fetch('http://localhost:4000/api/mailer', options)
    .then(res =>{
      return res.json();
    }).then(res =>{
      setIsBusy(false)
    }).catch(res =>{
      setIsBusy(false);
      console.log(err);
    });
  }else{
    console.log('you must provide an image of the problem or error')
  }
}
 let submitButton;
 let loader;
 if(!isBusy){
  submitButton =(<input type="submit" value="send Email" />);
 }else{
  submitButton ="";
 }
 if(isBusy){
  loader =(<div>
    <div></div>
    <p>Sending Email, please wait</p>
  </div>)
 } else{
  loader = ""
 }

 return (
  <div>
    {submitButton}
  </div>
 )
}

export default Contact