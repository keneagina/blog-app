const NewsletterSignup = () => {
  return (
    <div style={{ 
      backgroundColor: '#2574a9',
      padding: '30px',
      borderRadius: '8px',
      marginBottom: '60px'
    }}>
      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        marginBottom: '15px', 
        color: 'white',
        textAlign: 'center'
      }}>
        Subscribe to Our Newsletter
      </h2>
      <p style={{ 
        color: 'white', 
        marginBottom: '25px', 
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto 25px'
      }}>
        Get the latest employee advocacy insights, tips, and best practices delivered straight to your inbox.
      </p>
      
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px',
        margin: '0 auto',
        gap: '15px'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            placeholder="First Name" 
            style={{
              flex: 1,
              padding: '12px 15px',
              borderRadius: '4px',
              border: 'none',
              fontSize: '16px'
            }}
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            style={{
              flex: 1,
              padding: '12px 15px',
              borderRadius: '4px',
              border: 'none',
              fontSize: '16px'
            }}
          />
        </div>
        
        <input 
          type="email" 
          placeholder="Email Address" 
          style={{
            padding: '12px 15px',
            borderRadius: '4px',
            border: 'none',
            fontSize: '16px'
          }}
        />
        
        <input 
          type="text" 
          placeholder="Company Name" 
          style={{
            padding: '12px 15px',
            borderRadius: '4px',
            border: 'none',
            fontSize: '16px'
          }}
        />
        
        <button 
          type="submit" 
          style={{
            backgroundColor: '#FF6B00',
            color: 'white',
            padding: '14px',
            borderRadius: '4px',
            border: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Subscribe
        </button>
        
        <p style={{ color: '#ccc', fontSize: '14px', textAlign: 'center', marginTop: '10px' }}>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
};

export default NewsletterSignup; 