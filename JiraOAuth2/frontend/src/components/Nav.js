import { Link } from 'react-router-dom';

const listStyles = {
  display: 'flex',
};

const listItemStyles = {
  listStyleType: 'none',
  padding: '10px',
};

const Nav = () => {
  return (
    <nav>
      <ul style={listStyles}>
        <li style={listItemStyles}>
          <Link to='/'>Authorize User</Link>
        </li>
        <li style={listItemStyles}>
          <Link to='/users'>Users</Link>
        </li>
        <li style={listItemStyles}>
          <Link to='/projects'>Projects</Link>
        </li>
        <li style={listItemStyles}>
          <Link to='/issues'>Issues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
