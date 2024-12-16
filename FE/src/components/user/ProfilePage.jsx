import React, { useState } from "react";
import "./ProfilePage.css";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Personal Info");
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    dateOfBirth: "",
    address: "",
    phone: "",
    email: "",
  });

  const tabs = [
    "Personal Info",
    "Favourite",
    "My Review",
    "Setting",
    "Support",
    "Invite Friends",
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  // Save changes and exit editing mode
  const handleSave = () => {
    setIsEditing(false);
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-container">
      {/* Header */}
      <div className="profile-header">Profile</div>

      {/* Navigation Tabs */}
      <div className="profile-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="profile-content">
        {activeTab === "Personal Info" ? (
          <div className="personal-info">
            {/* Name */}
            <div className="line">
              <strong>Name:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleChange}
                />
              ) : (
                <span>{userInfo.name || " "}</span>
              )}
            </div>

            {/* Date of Birth */}
            <div className="line">
              <strong>Date of Birth:</strong>{" "}
              {isEditing ? (
                <input
                  type="date"
                  name="dateOfBirth"
                  value={userInfo.dateOfBirth}
                  onChange={handleChange}
                />
              ) : (
                <span>{userInfo.dateOfBirth || " "}</span>
              )}
            </div>

            {/* Address */}
            <div className="line">
              <strong>Address:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={userInfo.address}
                  onChange={handleChange}
                />
              ) : (
                <span>{userInfo.address || " "}</span>
              )}
            </div>

            {/* Phone */}
            <div className="line">
              <strong>Phone:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleChange}
                />
              ) : (
                <span>{userInfo.phone || " "}</span>
              )}
            </div>

            {/* Email */}
            <div className="line">
              <strong>Email:</strong>{" "}
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                />
              ) : (
                <span>{userInfo.email || " "}</span>
              )}
            </div>

            {/* Buttons */}
            {isEditing ? (
              <div className="edit-buttons">
                <button className="save-button" onClick={handleSave}>
                  Update
                </button>
                <button className="cancel-button" onClick={toggleEdit}>
                  Cancel
                </button>
              </div>
            ) : (
              <button className="edit-button" onClick={toggleEdit}>
                Edit Profile
              </button>
            )}
          </div>
        ) : (
          <p>No content available for {activeTab}</p>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
