import { useState } from 'react';
import axios from 'axios';

const Issues = () => {
  const [issue, setIssue] = useState(null);

  const getIssue = async () => {
    const { data } = await axios.get('http://localhost:3001/get-issue', {
      params: { id: '10015' },
    });
    console.log(data);
    setIssue(data);
  };

  const createIssue = async () => {
    const { data } = await axios.post('http://localhost:3001/create-issue', {
      projectId: '10010',
      accountId: '60c0b4d0f6505400693531b2',
    });
    console.log(data);
  };

  return (
    <div>
      <div>
        <button onClick={getIssue}>Get issue</button>

        {issue && (
          <ul>
            <li>ID: {issue.id}</li>
            <li>Key: {issue.key}</li>
            <li>Assignee: {issue.fields.assignee.displayName}</li>
          </ul>
        )}
      </div>
      <hr />

      <div>
        <button onClick={createIssue}>Create issue</button>
      </div>
    </div>
  );
};

export default Issues;
