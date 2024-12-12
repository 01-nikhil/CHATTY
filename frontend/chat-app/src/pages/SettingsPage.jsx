import React, { useState } from 'react';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [email, setEmail] = useState('');
  
  // Handle toggling dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can also save this to localStorage or apply CSS changes
  };
  
  // Handle toggling notifications
  const toggleNotifications = () => {
    setNotifications(!notifications);
  };
  
  // Handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Save settings (you can later connect this to a backend or state management)
  const handleSaveSettings = () => {
    // For now, just log the settings
    console.log('Settings saved:', { darkMode, notifications, email });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      
      {/* Dark Mode Toggle */}
      <div className="mb-4">
        <label className="inline-flex items-center">
          <span className="mr-2">Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
            className="toggle toggle-primary"
          />
        </label>
      </div>

      {/* Notifications Toggle */}
      <div className="mb-4">
        <label className="inline-flex items-center">
          <span className="mr-2">Enable Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={toggleNotifications}
            className="toggle toggle-primary"
          />
        </label>
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          className="input input-bordered w-full"
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSaveSettings}
          className="btn btn-primary"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
