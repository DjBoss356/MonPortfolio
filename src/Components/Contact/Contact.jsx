import React from 'react';
import style from "../Contact/Contact.module.css";
import { useState } from 'react';
import { resetWarningCache } from 'prop-types';


export const Contact = () => {
    const [user, setUser] = useState({
        name:'', email: '', message : ''
    });

    let name, value;//j'enregistre chaque valeur.
    const data = (e) =>
    {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name] : value});
    }

    const getData = async (e) =>{
        const {name,email,message} = user;
        e.preventDefault();
        const options ={
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,email,message
            })
        }
         const res  = await fetch('https://mon-portfolio-632b5-default-rtdb.europe-west1.firebasedatabase.app/UserData.json', options)
         if (res){
            alert("Message envoyé!")
         }
         else{
            alert(`une erreur s'est produite !`);
         }
    }

  return (
    <section className={style.container} id="contact">
        <h1 className={style.section}>Contact</h1>
        <form id="form" method="POST" className={style.form}>
            <p className={style.textc}>Je suis ravi que vous soyez intéressé par mon travail et que vous souhaitiez entrer en contact avec moi. <br />Que ce soit pour discuter d'un projet, poser des questions ou simplement pour dire bonjour, <br />je suis ouvert aux nouvelles opportunités et aux connexions professionnelles.</p>
            <p className={style.info}>Entrez vos informations</p>
            <div className={style.box}>
              <input className={style.name} id="nom" type="text" name="name" placeholder="Votre nom" autoComplete="on" value={user.name}  onChange={data} required  />
              <br /><input className={style.mail} id="mail" type="email" name="email" placeholder="Votre adresse e-mail" value={user.email} onChange={data} required  />
              <br /><textarea className={style.message} id="message" name="message" placeholder="Votre message" value={user.message} onChange={data} required/>
            </div>
            <button onClick={getData}className={style.button} type="submit" value="Send" >Envoyer</button>
        </form>
    </section>
  );
}
