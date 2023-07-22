const app = require('./app')
const mongoConnect = require('./db/connection');

const { PORT } = process.env;

const startServer = async () => {
  try {
    await mongoConnect();
    app.listen(PORT, (error) => {
      if (error) {
        console.log('Server connection errored')
        return;
      }
			console.log(`Server running. Use our API on port: ${PORT}`);
		});
  } catch (error) {
    console.log(error)
  }
}

startServer();
