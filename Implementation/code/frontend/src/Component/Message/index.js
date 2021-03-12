import React, { useState, useContext } from "react";
import "./Style.css";
import { MessageContext } from "src/Component/LoginRescue/AppRescue";
import swal from 'sweetalert';


export const Message = () => {
  const { setMessageData } = useContext(MessageContext);
  const [mess, setMess] = useState("")


  const hangleChange = () => {
    setMessageData(mess);
    setMess("")
    swal("Success", "We saved your message! Choose the receiver of your message now!", "success")


  }


  return (
    <div class="chat-popup" id="myForm">
      <form action="" class="form-container">
        <label id="label-msg" for="msg">
          <b>Message To The Victim</b>
        </label>
        <textarea
          id="textField"
          type="message"
          value={mess}
          placeholder="Type message.."
          name="msg"
          onChange={(e) => setMess(e.target.value)}
          required
        ></textarea>
        <button type="button" class="btn" onClick={hangleChange}>
          Send
        </button>
      </form>
    </div>
  );
};
