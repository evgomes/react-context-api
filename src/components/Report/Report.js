import React, { useContext } from "react";

import NotesContext from "../../contexts/NotesContext";

import Card from "../ui/Card/Card";
import CardHeader from "../ui/Card/CardHeader/CardHeader";
import CardBody from "../ui/Card/CardBody/CardBody";

const Report = () => {
  const context = useContext(NotesContext);
  const date = context.lastUpdate ? context.lastUpdate.toLocaleString() : "-";

  return (
    <Card>
      <CardHeader title="Status" />
      <CardBody>
        <p>
          <strong>Total notes:</strong> {context.notes.length}
        </p>
        <p>
          <strong>Last update:</strong> {date}
        </p>
      </CardBody>
    </Card>
  );
};

export default Report;
