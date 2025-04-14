import express from 'express';
import sequelize from './config/database';
import router from './router';

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(router);

sequelize.sync({ alter: true })
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server running on http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.error("Failed to sync DB or start server:", err);
		process.exit(1); // exit with error
	});
