import { Link } from 'react-router-dom';

const FeaturedPost = () => {
  return (
    <div style={{ marginBottom: '60px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>
        Featured Resource
      </h2>
      <div style={{ 
        backgroundColor: '#2574a9', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80" 
          alt="Employee Advocacy Guide" 
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
        <div style={{ padding: '25px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '15px', color: 'white' }}>
            Employee Advocacy: The Complete Guide for 2023
          </h3>
          <p style={{ color: 'white', marginBottom: '20px', lineHeight: '1.6' }}>
            Download our complete guide to learn everything you need to know about building and scaling a successful employee advocacy program.
          </p>
          <Link to="/" style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#FF6B00',
            color: 'white',
            borderRadius: '4px',
            fontWeight: 'bold',
            textDecoration: 'none'
          }}>
            Download Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost; 