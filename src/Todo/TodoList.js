import React, { useContext } from "react";
import { Container, ListGroup } from "react-bootstrap";
import TododItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <Container>
      <ListGroup as="li">
        {props.todos.map((todo, index) => {
          return <TododItem todo={todo} index={index} />;
        })}
      </ListGroup>
    </Container>
  );
}
