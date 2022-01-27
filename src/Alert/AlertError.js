import React from "react";
import { Modal, Button, Alert } from "react-bootstrap";

export default function AlertDismissibleExample({ show, onShow }) {
  return (
    <Alert variant="danger" onClose={onShow} dismissible>
      <Alert.Heading>Ошибка</Alert.Heading>
      <p>Максимальное количество списков 10</p>
    </Alert>
  );
}
