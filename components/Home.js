import React from 'react';
import { Button } from 'react-bootstrap'; // To use the Bootstrap Button component
import { useNavigate } from 'react-router-dom'; // To navigate between pages
import NavigationBar from "./Navbar";

export default function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    // Redirects to the Products page
    navigate('/Products');
  };

  return (
    <div>
      <NavigationBar />
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7' , 
        background: "linear-gradient(to right, #e0f7fa, #80deea)", // Soft gradient background
      }}>

      <h1 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 'bold', color: '#333' }}>
        Welcome to Best Store
      </h1>

      <Button 
        variant="success" 
        onClick={handleExploreClick} 
        style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          borderRadius: '30px',
          marginTop: '20px',
          backgroundColor: '#4CAF50', // green color
          borderColor: '#4CAF50',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: '0.3s ease-in-out'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
      >
        Explore Products
      </Button>
      </div>
    </div>
  );
}
