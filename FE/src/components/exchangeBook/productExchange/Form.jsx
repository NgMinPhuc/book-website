import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Form.css';

const GetInTouchForm = ({ handleSubmit, name, setName, email, setEmail, message, setMessage, image, setImage, file, setFile }) => {
  return (
    <Form className="contact-form" onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name of Book</Form.Label>
        <Form.Control
          type="text"
          placeholder="Book's Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email or Name Account</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email or Name Account"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formName">
        <Form.Label>Year of purchase</Form.Label>
        <Form.Control
          type="text"
          placeholder="Year"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Detail</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Your Message"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Your Message"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formImage">
        <Form.Label>Imamge Image</Form.Label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        />
        {image && <img src={image} alt="preview" className="image-preview" />}
      </Form.Group>

      <Form.Group controlId="formFile">
        <Form.Label>Other Image File</Form.Label>
        <input
          type="file"
          accept="file/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        {file && <span className="file-name">{file.name}</span>}
      </Form.Group>

      <Button variant="primary" type="submit" block>
        Send Message
      </Button>
    </Form>
  );
};

export default GetInTouchForm;
