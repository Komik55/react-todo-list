import React, { useState } from "react";
import { Form, Container, Button, InputGroup } from "react-bootstrap";

export default function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Введите текст"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button variant="primary" type="submit">
              Добавить
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </Container>
  );
}
