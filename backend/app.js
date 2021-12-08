const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const makeLookup = require('./makeLookups');

//heroku test

const app = express();
const port = process.env.PORT || 2020;

app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true, // <= Accept credentials (cookies) sent by the client
	})
);
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

const path1 = './lookup/blueLessThan131.json';
const path2 = './lookup/blueGreaterThan130.json';

try {
	if (!fs.existsSync(path1)) {
		makeLookup(false);
	}
	if (!fs.existsSync(path2)) {
		makeLookup(true);
	}
	if (fs.existsSync(path1) && fs.existsSync(path2)) {
		console.log('You are good to go - ✅');
	}
} catch (err) {
	console.log(err);
}
// ssh key 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
//convert has to be required after the files are made
const convert = require('./Converter');

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
		const emojis = await convert(file.path);
		res.json({ success: true, emojis });
	}
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
