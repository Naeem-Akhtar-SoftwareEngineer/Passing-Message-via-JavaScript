
jQuery(document).ready(function($) {
  "use strict";

  // Message varialbe
  const type_message = document.querySelector("#type_message");
  const btn_message = document.querySelector("#btn_sendMessage");
  const output_message = document.querySelector("#show_message");

  //Button Click function
  btn_message.addEventListener("click",sendMessage);

  //Function for getting content
  function sendMessage(){
    //Get Input Field message
    let getContent = type_message.value;

    //Check Value Empty and Delivered Message
    if(getContent === ''){
      alert("Please Enter your Message!");
    }else {
      output_message.innerHTML = getContent;
      type_message.value = '';
    }
  }

});
