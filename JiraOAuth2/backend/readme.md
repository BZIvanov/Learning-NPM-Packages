## Docs

Read [here](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/) how to setup OAuth2.0

## Basic process

#### App setup

1. Create your jira app [here](https://developer.atlassian.com/console/myapps/)
2. Click the _Create_ button and select _OAuth 2.0 integration_
3. Give it a name, check the agree box and click Create
4. In the newly created App on the _Permissions_ tab click _Add_ for all the scopes you want to add
5. On the _Authorization_ tab click _Configure_ and provide the _Callback URL_. This is where the user will be redirected when he authorizes our App
6. On the _Settings_ tab you can find the _Client ID_ and _Secret_ which you need for the .env file
7. Apps by default are private in development mode and can not be used by other users, read the link in the beggining of this file for more info.
