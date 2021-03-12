import React, { useEffect, useState, useContext } from "react";
import "./Style.css";
import { TableAll } from "src/Component/TableAll";
import allColumns from "src/Component/TableAll/allColumns";
import victimsColumns from "src/Component/TableAll/victimsColumns";
import sosColumns from "src/Component/TableAll/sosColumns";
import VictimService from "src/Component/ApiService/VictimService";
import SosService from "src/Component/ApiService/SosService";
import { SosContext, ThemeContext } from "src/Component/LoginRescue/AppRescue";

export const ButtonTable = (props) => {
  const [buttonClicked, setButtonClicked] = useState("Type of Emergency");
  const [tableName, setTableName] = useState({
    table: [],
    typeOfData: "",
    selectionAllowed: true,
  });

  const [sosTable, setSosTable] = useState([]);
  const [victimTable, setVictimTable] = useState([]);
  const [tableColumns, setTableColumns] = useState(allColumns);
  const [theArray ,setTheArray] = useState([]);
  const [cellEdit, setCellEdit] = useState({
    onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {},
  });
  const { setDataVictims } = useContext(ThemeContext);
  const { setSosCases } = useContext(SosContext);

  const buttonPressed = (e) => {
    switch (e.target.name) {
      case "Victims":
        setButtonClicked("Victims");
        setTableColumns(victimsColumns);
        setTableName({
          table: victimTable,
          typeOfData: "Victims",
          selectionAllowed: true,
        });
        break;
      case "SOS":
        setButtonClicked("SOS");
        setTableColumns(sosColumns);
        setTableName({
          table: sosTable,
          typeOfData: "SOS",
          selectionAllowed: false,
        });
        setCellEdit({
          onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
            return new Promise((resolve, reject) => {
              SosService.updateTimer(rowData.id, newValue)
                .then((resp) => {
                  rowData.timer = newValue;
                  resolve();
                })
                .catch((err) => {
                  reject();
                });
            });
          },
        });
        break;
    }
  };
  useEffect(() => {
    VictimService.getVictims().then((response) => {
      setVictimTable(response.data);
      setDataVictims(response.data);
      setTheArray((theArray) => [...theArray, ...response.data]);
    });

    SosService.getSos().then((response) => {
      setSosTable(response.data);
      setSosCases(response.data);
      setTheArray((theArray) => [...theArray, ...response.data]);
    });
  }, []);

  return (
    <div>
      <div class="multi-button">
        <button name="Victims" onClick={buttonPressed}>
          Victims
        </button>
        <button name="SOS" onClick={buttonPressed}>
          SOS
        </button>
      </div>
      <TableAll
        isClicked={buttonClicked}
        data={tableName.table}
        columns={tableColumns}
        messageTo={props.messageTo}
        dataType={tableName.typeOfData}
        selectionAllowed={tableName.selectionAllowed}
        cellEditable={cellEdit}
      />
    </div>
  );
};
