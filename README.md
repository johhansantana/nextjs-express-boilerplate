##How to use

Clone this repository

```bash
git clone https://github.com/jsantana90/nextjs-express-boilerplate.git
```

cd into it and install dependencies

```bash
cd nextjs-express-boilerplate
npm install // or yarn install
```

Start it by doing the following:

```bash
export MONGO_URL=*your mongodb url* // you can get one for free at https://www.mlab.com/home
npm run dev
```

Now you will have your api server running.

For now it only has 2 endpoints, which is a get `/` and a post `/kitty`.

If you navigate to `http://localhost:3001/` you will see the list of kittens (an empty array if you haven't added one);

###Deploy with now

To deploy you will need a mongodb url.

If you don't want to expose your url in your code just create a secret with now secrets. [More info.](https://zeit.co/blog/environment-variables-secrets)

Then do

```bash
now -e MONGO_URL=@secretName
```

or just do `now` and add your mongodb url to the `index.js` file.

###NextJS with Redux boilerplate

If you want to test this easily check my other repository [https://github.com/jsantana90/nextjs-redux-boilerplate] which connects to this api server, just run the two at the same time and make the necessary changes to the environment variables and endpoints to point to localhost.

Or check the demo [https://nextjs-redux-boilerplate-toocsyxoax.now.sh]