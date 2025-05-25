import { useState } from "react";

const PasswordStrengthMeter = ({ password }) => {
  // Calculate password strength (0-100)
  const calculateStrength = () => {
    let strength = 0;
    
    // Length check (max 30 points)
    strength += Math.min(password.length * 5, 30);
    
    // Contains uppercase (10 points)
    if (/[A-Z]/.test(password)) strength += 10;
    
    // Contains numbers (10 points)
    if (/\d/.test(password)) strength += 10;
    
    // Contains special chars (10 points)
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 10;
    
    // Contains both letters and numbers (15 points)
    if (/[A-Za-z]/.test(password) && /\d/.test(password)) strength += 15;
    
    // Contains letters, numbers AND special chars (25 points)
    if (/[A-Za-z]/.test(password) && /\d/.test(password) && /[^A-Za-z0-9]/.test(password)) strength += 25;
    
    return Math.min(strength, 100);
  };

  const strength = calculateStrength();
  
  // Get color and label based on strength
  const getStrengthData = () => {
    if (strength === 0) return { color: 'bg-gray-200', label: '', width: '0%' };
    if (strength < 40) return { color: 'bg-red-500', label: 'Weak', width: `${strength}%` };
    if (strength < 70) return { color: 'bg-yellow-500', label: 'Moderate', width: `${strength}%` };
    if (strength < 90) return { color: 'bg-blue-500', label: 'Strong', width: `${strength}%` };
    return { color: 'bg-green-500', label: 'Very Strong', width: `${strength}%` };
  };

  const { color, label, width } = getStrengthData();

  return (
    <div className="mt-2 space-y-1">
      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} transition-all duration-300`}
          style={{ width }}
        />
      </div>
      
      {password.length > 0 && (
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-gray-500">
            {label}
          </span>
          <div className="text-xs text-gray-400">
            {strength}/100
          </div>
        </div>
      )}
      
      {/* Password requirements checklist */}
      {password.length > 0 && (
        <ul className="mt-2 space-y-1 text-xs text-gray-500">
          <li className={`flex items-center ${password.length >= 8 ? 'text-green-500' : ''}`}>
            {password.length >= 8 ? '✓' : '•'} At least 8 characters
          </li>
          <li className={`flex items-center ${/[A-Z]/.test(password) ? 'text-green-500' : ''}`}>
            {/[A-Z]/.test(password) ? '✓' : '•'} Uppercase letter
          </li>
          <li className={`flex items-center ${/\d/.test(password) ? 'text-green-500' : ''}`}>
            {/\d/.test(password) ? '✓' : '•'} Number
          </li>
          <li className={`flex items-center ${/[^A-Za-z0-9]/.test(password) ? 'text-green-500' : ''}`}>
            {/[^A-Za-z0-9]/.test(password) ? '✓' : '•'} Special character
          </li>
        </ul>
      )}
    </div>
  );
};
