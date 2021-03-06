const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const kdTree = require('./kdtree');
const convert = require('./Converter');

const mappedEmojis = require('./MappedEmojis');
const keys = Object.keys(mappedEmojis);

const root = kdTree.kdTree(keys, mappedEmojis);

const app = express();
const port = process.env.PORT || 2020;

app.use(
	cors({
		origin: ['http://localhost:3000', 'https://lauritsbonde.github.io'],
		credentials: true, // <= Accept credentials (cookies) sent by the client
	})
);
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

//convert has to be required after the files are made
const DIR = './public/uploads';

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, DIR);
	},
	filename: (req, file, cb) => {
		const fileName = file.originalname.toLowerCase().split(' ').join('-');
		cb(null, uuidv4() + '-' + fileName);
	},
});

const upload = multer({
	storage: storage,
	limits: { fileSize: 250000 },
	onError: (err, next) => {
		console.log('Error', err);
	},
	fileFilter: (req, file, cb) => {
		if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
		}
	},
});

app.post('/convert', upload.single('image'), async (req, res) => {
	const file = req.file;
	if (file === undefined) {
		res.status(400).json({ success: false, msg: 'No file uploaded' });
	} else {
		const emojis = await convert(file.path, root);
		res.json({ success: true, emojis });
	}
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
