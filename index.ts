import express from 'express';
import path from 'path';

const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/bootstrap-css', express.static(path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist', 'css')));
app.use('/bootstrap-js', express.static(path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist', 'js')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
