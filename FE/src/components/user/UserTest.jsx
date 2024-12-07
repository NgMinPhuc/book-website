import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

const UserTest = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    email: '',
    address: '',
    dateOfBirth: '',
  });

  // Handle chỉnh sửa form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Cập nhật thông tin mới (hiện tại không làm gì vì chưa có database)
    setIsEditing(false);  // Quay lại màn hình hiển thị profile
  };

  // Handle cancel
  const handleCancel = () => {
    setIsEditing(false);  // Quay lại màn hình hiển thị profile
    setFormData({ username: '', phoneNumber: '', email: '', address: '', dateOfBirth: '' });  // Khôi phục lại dữ liệu cũ (trống)
  };

  return (
    <Container>
      <Box
        sx={{
          textAlign: 'center',
          padding: '30px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: 3,
          marginTop: '50px',
          maxWidth: '600px',
          margin: 'auto',
          marginBottom: '30px',
        }}
        ><Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          fontFamily: 'Poppins, sans-serif', // Đổi kiểu chữ ở đây
          textAlign: 'center',
          fontSize: '26px',
          color: '#333',
          marginBottom: '30px',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.2)',
          }
        }}
      >
        My Profile
      </Typography>

        {/* Hiển thị thông tin người dùng (nếu không chỉnh sửa) */}
        {!isEditing ? (
          <Box sx={{ marginBottom: '20px', textAlign: 'left' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: '500',
                letterSpacing: '0.5px',
                transition: '0.3s ease',
                '&:hover': {
                  color: '#375CF5', // Đổi màu khi hover
                  fontWeight: '600', // Làm đậm chữ khi hover
                },
              }}
            >
              <strong>Username:</strong> {formData.username || ''}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: '500',
                letterSpacing: '0.5px',
                transition: '0.3s ease',
                '&:hover': {
                  color: '#375CF5',
                  fontWeight: '600',
                },
              }}
            >
              <strong>Phone Number:</strong> {formData.phoneNumber || ''}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: '500',
                letterSpacing: '0.5px',
                transition: '0.3s ease',
                '&:hover': {
                  color: '#375CF5',
                  fontWeight: '600',
                },
              }}
            >
              <strong>Email:</strong> {formData.email || ''}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: '500',
                letterSpacing: '0.5px',
                transition: '0.3s ease',
                '&:hover': {
                  color: '#375CF5',
                  fontWeight: '600',
                },
              }}
            >
              <strong>Address:</strong> {formData.address || ''}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: '500',
                letterSpacing: '0.5px',
                transition: '0.3s ease',
                '&:hover': {
                  color: '#375CF5',
                  fontWeight: '600',
                },
              }}
            >
              <strong>Date of Birth:</strong> {formData.dateOfBirth || ''}
            </Typography>
          </Box>
        ) : (
          // Hiển thị form chỉnh sửa
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="normal"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              margin="normal"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <TextField
              label="Date of Birth"
              variant="outlined"
              fullWidth
              margin="normal"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
              <Button
                variant="contained"
                color="success"
                type="submit"
                sx={{ marginRight: '10px' }}
              >
                Submit
              </Button>
              <Button
  variant="outlined"
  sx={{
    backgroundColor: '#007AF5',  // Màu nền nút
    color: 'white',  // Màu chữ
    borderColor: '#007AF5',  // Màu viền nút
    '&:hover': {
      backgroundColor: '#265DF4',  // Màu nền khi hover
      borderColor: '#217DF5',  // Màu viền khi hover
      color: 'white',  // Màu chữ khi hover
    },
  }}
  onClick={handleCancel}
>
  Cancel
</Button>
            </Box>
          </form>
        )}

        {/* Nút Edit Profile */}
        {!isEditing && (
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginTop: '20px',
              backgroundColor: '#1E98F5',
              '&:hover': {
                backgroundColor: '#2B72F4',
              },
            }}
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default UserTest;