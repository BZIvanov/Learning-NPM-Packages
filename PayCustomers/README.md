## Usage

Install dependencies from package.json.

Update .env file with valid secret key, the current one is as example.

## Docs

Click [here](https://stripe.com/docs/api?lang=node) for the documentation. From the menu on the left you can check whatever you need and you can find for the different methods examples with the response data.

## Stripe

You will need to register account to get your API keys. The secret key is used on the backend and the publishable key on the frontend.

## Stripe CLI

#### Installation

To be able to test webhooks locally we need to install the Stripe-CLI.

On the [docs](https://stripe.com/docs/stripe-cli) page scroll down to the install step. Click Windows tab and follow the instructions which are something like the following:

- open the github link
- download the zip file named similar to stripe_X.X.X_windows_x86_64.zip
- unzip it
- open cmd in the file's folder and type _stripe.exe_ (the name of the file) and press enter

#### Login with the CLI

While in the same cmd from the previous step follow the next step from the documentation with _stripe login_.

#### Connect localhost

And while in the same terminal where you last pressed Enter to configure your account, now do the next step.
Run the following command

```bash
stripe listen --forward-to http://localhost:3000/webhook
```

You will be given Webhook secret which you will need for the .env file.
You can read more info [here](https://stripe.com/docs/stripe-cli/webhooks).
The webhook secret is active for 90 days.

Now every next time run again the following command

```
stripe listen --forward-to http://localhost:3000/webhook
```

and with Postman you can use the attach payment method route to trigger one of the event we handle we in this example. In the console you should be able to see the event. Remember to keep the cmd with the above command running.
