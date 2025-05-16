import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-[30px] text-center bg-white border-none border-b border-[#eaeaea] font-['Open_Sans',sans-serif]">
      <div className="container">
        <Link to="/" className="no-underline">
          <div className="text-[32px] font-bold m-0 text-[#FF6B00]">
            DSMN8
          </div>
          <h1 className="text-[32px] text-[#434343] mx-auto mt-[10px] mb-0 font-bold font-['Open_Sans',sans-serif]">
            The Employee Advocacy Blog
          </h1>
          <h2 className="text-xl text-[#434343] font-normal max-w-[800px] mx-auto mt-[10px] mb-0 font-['Open_Sans',sans-serif]">
            Expert guidance for building and scaling your employee advocacy program.
          </h2>
        </Link>
      </div>
    </header>
  );
};

export default Header; 