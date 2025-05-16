import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ 
      padding: '30px 0', 
      textAlign: 'center',
      backgroundColor: 'white',
      border: 'none',
      borderBottom: '1px solid #eaeaea',
      fontFamily: "'Open Sans', sans-serif"
    }}>
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{
            fontSize: '32px',
            fontWeight: 'bold',
            margin: '0',
            color: '#FF6B00' 
          }}>
            DSMN8
          </div>
          <h1 style={{
            fontSize: '32px',
            color: '#434343',
            margin: '10px auto 0',
            fontWeight: 'bold',
            fontFamily: "'Open Sans', sans-serif"
          }}>
            The Employee Advocacy Blog
          </h1>
          <h2 style={{
            fontSize: '20px',
            color: '#434343',
            fontWeight: 'normal',
            maxWidth: '800px',
            margin: '10px auto 0',
            fontFamily: "'Open Sans', sans-serif"
          }}>
            Expert guidance for building and scaling your employee advocacy program.
          </h2>
        </Link>
      </div>
    </header>
  );
};

export default Header; 