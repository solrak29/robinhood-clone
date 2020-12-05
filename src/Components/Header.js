import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header.css'


function Header() {
  return (
    <div className="Header">
      <div className="Header-logo">
        <img src="/assets/logo.svg" alt="Home Logo" />
      </div>
      <div className="Header-search">
        <div className="search-container">
            < FontAwesomeIcon icon={faSearch} />
            <input className="search-input" type="text" placeholder='Search'>
            </input>
        </div>
      </div>
      <div className="Header-links">
          <a href="#" >FreeStocks</a>
          <a href="#" >Portfolios</a>
          <a href="#" >Cash</a>
          <a href="#" >Messages</a>
          <a href="#" >Account</a>
      </div>
    </div>
  );
}

export default Header;