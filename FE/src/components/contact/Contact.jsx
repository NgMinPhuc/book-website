import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaArrowLeft, FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'; // Thêm các icon liên hệ
import './Contact.css'; // Import CSS
import BookImage from '../../../public/images/contact/BookImage.jpg';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false); // State để theo dõi trạng thái gửi message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null); // State để lưu trữ hình ảnh đính kèm
  const [file, setFile] = useState(null); // State để lưu trữ file đính kèm

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true); // Cập nhật trạng thái gửi thành công
  };

  const handleBack = () => {
    setMessageSent(false); // Quay lại form ban đầu
    setName('');
    setEmail('');
    setMessage('');
    setImage(null); // Xóa ảnh preview khi quay lại form
    setFile(null); // Xóa file preview khi quay lại form
  };

  return (
    <Container className="contact-container">
      <Row className="contact-header text-center mb-5">
        <Col>
          {!messageSent && (
            <>
              <h1>Contact Us</h1>
              <p className="contact-description">
                We're always excited to hear from our valued customers and are here to assist with any inquiries you may have. Whether you're looking for more information about our products, need assistance with an order, or simply have a suggestion, feel free to reach out to us. We’re committed to providing you with the best support and ensuring your experience is as smooth and enjoyable as possible.
              </p>
            </>
          )}
        </Col>
      </Row>

      {messageSent ? (
        // Khi gửi message thành công
        <div className="success-message">
          <h2>Hello {name},</h2>
          <p>Your message has been sent successfully! Please check your email for a response.</p>
          <Button variant="secondary" onClick={handleBack}>
            <FaArrowLeft /> Go Back
          </Button>
        </div>
      ) : (
        // Form liên hệ
        <div className="contact-content">
          <div className="contact-info">
            <img src={BookImage} alt="Book" className="contact-image" />
          </div>

          <div className="contact-form-wrapper">
            <h2>Get in Touch</h2>
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Your Name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Your Email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  placeholder="Your Message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  required 
                />
              </Form.Group>

              <Form.Group controlId="formImage">
                <Form.Label>Attach Image</Form.Label>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} 
                />
                {image && <img src={image} alt="preview" className="image-preview" />}
              </Form.Group>

              <Form.Group controlId="formFile">
                <Form.Label>Attach File</Form.Label>
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
          </div>
        </div>
      )}
    </Container>
  );
};

export default Contact;
