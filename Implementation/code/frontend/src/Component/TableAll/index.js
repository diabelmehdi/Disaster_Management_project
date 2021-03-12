import React, { useContext } from "react";
import swal from "sweetalert";
import MessageIcon from "@material-ui/icons/Message";
import MaterialTable from "material-table";
import VictimService from "../ApiService/VictimService";
import { MessageContext } from "../LoginRescue/AppRescue";
import DeleteIcon from "@material-ui/icons/Delete";
import SosService from "../ApiService/SosService";

export const TableAll = (props) => {
  const { message } = useContext(MessageContext);

  const handleSelection = (username) => {
    var victim = {
      messageToVictim: message,
    };

    VictimService.updateVictim(victim, username).then((res) => {
      swal(
        "Success!",
        `Your message "${message}" was sent to the user ${username}!`,
        "success"
      );
    });
  };

  const handleDelete = (rowData) => {
    if (props.dataType === "SOS") {
      SosService.deleteSOS(rowData.latitude).then((res) => {
        window.location.reload(false);
      });
    } else if (props.dataType === "Victims") {
      VictimService.deleteVictim(rowData.username).then((res) => {
        window.location.reload(false);
      });
    }
  };
  return (
    <div>
      <MaterialTable
        title={props.dataType}
        data={props.data}
        columns={props.columns}
        cellEditable={props.cellEditable}
        options={{
          search: false,
          paging: false,
          actions: props.selectionAllowed,
          selection: false,
          headerStyle: {
            backgroundColor: "blue",
            color: "#FFF",
          },
        }}
        actions={[
          {
            disabled: props.dataType === "All",
            icon: () => <DeleteIcon />,
            tooltip: "Delete forever",
            isFreeAction: false,
            onClick: (event, rowData) => handleDelete(rowData),
          },
          {
            disabled: props.dataType === "All" || props.dataType === "SOS",
            icon: () => <MessageIcon />,
            tooltip: "Send Message",
            isFreeAction: false,
            onClick: (event, rowData) => handleSelection(rowData.username),
          },
        ]}
      />
    </div>
  );
};
