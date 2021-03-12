import React, { useState } from "react";
import { MapWithMarker } from "src/Component/MapWithMarker";
import { Message } from "src/Component/Message";
import { ButtonTable } from "src/Component/ButtonTable/index";
import "./AppRescue.css";

export const ThemeContext = React.createContext({
  victims: [],
  setVictims: () => { },
});

export const SosContext = React.createContext({
  sosCases: [],
  setSosCases: () => { },
});
export const MessageContext = React.createContext({
  messageToThePerson: "Hey",
  setMessage: () => { },
});

function AppRescue() {
  const [message, setMessage] = useState("Hey you");

  function setMessageData(message) {
    setMessage(message);
  }

  const [victims, setVictims] = useState([]);

  function setDataVictims(table) {
    setVictims(table);
  }
  const [sosCases, setSosCases] = useState([]);


  return (
    <MessageContext.Provider value={{ message, setMessageData }}>
      <ThemeContext.Provider value={{ victims, setDataVictims }}>
        <SosContext.Provider value={{ sosCases, setSosCases }}>
          <div>
            <ButtonTable messageTo="Table" />
            <div class="lol">
              <MapWithMarker />
            </div>
            <div class="content">
                <Message />
            </div>
          </div>
        </SosContext.Provider>
      </ThemeContext.Provider>
    </MessageContext.Provider>
  );
}

export default AppRescue;
