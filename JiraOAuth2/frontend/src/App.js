import { useEffect } from 'react';
import axios from 'axios';

// this name is important to search in the response from https://api.atlassian.com/oauth/token/accessible-resources on the backend, because the id's in the response are not unique
const state = 'my-jira-username'; // extracted from here https://my-jira-username.atlassian.net/

const App = () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code'); // after the user authorize our app he will be redirected to the callback URL with code as query param

  // send the code to the backend
  useEffect(() => {
    if (code) {
      (async () => {
        await axios.get('http://localhost:3001/jira-oauth', {
          params: { code, state },
        });
      })();
    }
  }, [code]);

  let url = `https://auth.atlassian.com/authorize?`;
  url += `audience=api.atlassian.com&`;
  url += `client_id=vZfrMMLsonBaERK2bAWfCLjUeq6KTBta&`; // the App client ID, the same from the backend in the .env
  url += `scope=read%3Ajira-user%20read%3Ajira-work%20manage%3Ajira-project%20manage%3Ajira-configuration%20write%3Ajira-work%20manage%3Ajira-webhook%20manage%3Ajira-data-provider&`;
  url += `redirect_uri=http%3A%2F%2Flocalhost%3A3000&`; // http://localhost:3000 the callback URL from the Authorization tab in the App
  url += `state=${state}&response_type=code&prompt=consent`;

  return (
    <div>
      <button type='button'>
        <a href={url}>Grant access</a>
      </button>
    </div>
  );
};

export default App;
