import React, { useContext } from "react";

import NotesContext from "../../contexts/NotesContext";

import Card from "../ui/Card/Card";
import CardHeader from "../ui/Card/CardHeader/CardHeader";
import CardBody from "../ui/Card/CardBody/CardBody";
import CardFooter from "../ui/Card/CardFooter/CardFooter";

import Button from "../ui/Button/Button";

import "./Note.css";

const Note = props => {
  const context = useContext(NotesContext);

  return (
    <div className="note">
      <Card>
        <CardHeader title={props.title} />
        <CardBody>{props.text}</CardBody>
        <CardFooter>
          <Button onClick={() => context.onDeleteNote(props.id)} type="danger">
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Note;
