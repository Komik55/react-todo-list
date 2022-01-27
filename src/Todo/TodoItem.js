import React, { useContext } from "react";
import { Badge, Button, ListGroupItem } from "react-bootstrap";
import Context from "../Context/Context";

export default function TododItem({ todo, index }) {
  const { removeTodo } = useContext(Context);
  return (
    <ListGroupItem
      as="li"
      key={todo.id}
      className="d-flex align-items-center justify-content-between"
    >
      <span style={{ paddingLeft: "10px" }}>
        {" "}
        <strong>{index + 1}</strong>. {todo.title}
      </span>
      <Button
        variant="danger text text light "
        onClick={() => removeTodo(todo.id)}
      >
        &times;
      </Button>
    </ListGroupItem>
  );
}
