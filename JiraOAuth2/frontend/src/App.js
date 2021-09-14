import { useEffect } from 'react';
import axios from 'axios';

const state = 'some-secret-string';

const App = () => {
  // ----- INITIAL SETUP -----
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code'); // after the user authorize our app he will be redirected to the callback URL with code as query param

  // send the code to the backend
  useEffect(() => {
    if (code) {
      (async () => {
        await axios.get('http://localhost:3001/initial-run', {
          params: { code, state },
        });
      })();
    }
  }, [code]);

  let url = `https://auth.atlassian.com/authorize?`;
  url += `audience=api.atlassian.com&`;
  url += `client_id=vZfrMMLsonBaERK2bAWfCLjUeq6KTBta&`; // the App client ID, the same from the backend in the .env
  url += `scope=offline_access%20read%3Ajira-user%20read%3Ajira-work%20manage%3Ajira-project%20manage%3Ajira-configuration%20write%3Ajira-work%20manage%3Ajira-webhook%20manage%3Ajira-data-provider&`; // the offline_access parameter in the begginging will provide us with refresh token
  url += `redirect_uri=http%3A%2F%2Flocalhost%3A3000&`; // http://localhost:3000 the callback URL from the Authorization tab in the App
  url += `state=${state}&response_type=code&prompt=consent`;

  // ----- RENEW TOKENS SETUP -----

  const renewTokens = async () => {
    await axios.get('http://localhost:3001/renew-tokens');
  };

  // ----- GET CLIENT SITE ID -----

  const getSiteId = async () => {
    await axios.get('http://localhost:3001/resources-site');
  };

  return (
    <div>
      <div>
        <button type='button'>
          <a href={url}>Grant access</a>
        </button>
      </div>

      <div>
        <button onClick={renewTokens} type='button'>
          Renew tokens
        </button>
      </div>

      <div>
        <button onClick={getSiteId} type='button'>
          Get site id
        </button>
      </div>
    </div>
  );
};

export default App;
