import { useState } from 'react';
import axios from 'axios';

const listItemStyles = {
  display: 'flex',
  alignItems: 'center',
  listStyleType: 'none',
  padding: '10px',
};

const imgStyles = {
  width: '24px',
  marginRight: '10px',
};

const Projects = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get('http://localhost:3001/get-all-users', {
      params: { name: 'my-jira-username' },
    });
    setUsers(data);
  };

  console.log(users);

  return (
    <div>
      <hr />
      <div>
        <button onClick={getUsers}>Get users</button>
      </div>
      {users.length && (
        <ul>
          {users.map((user) => (
            <li key={user.accountId} style={listItemStyles}>
              <img
                src={user.avatarUrls['16x16']}
                alt='user-preview'
                style={imgStyles}
              />
              <h3>{user.displayName}</h3>
              <span style={{ marginLeft: '10px' }}>{user.accountType}</span>
            </li>
          ))}
        </ul>
      )}
      <hr />
    </div>
  );
};

export default Projects;
