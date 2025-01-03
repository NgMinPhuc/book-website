import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './Form.css';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const FForm = ({ handleSubmit, name, setName, email, setEmail, message, setMessage, image, setImage, file, setFile }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="contact-content">
      <Form className="contact-form1" onSubmit={handleSubmit}>
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
          <Form.Label>Image File</Form.Label>
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

        <Button variant="primary" type="submit" block onClick={handleClick}>
          Post
        </Button>
      </Form>

      <Snackbar open={open} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Post successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default FForm;
