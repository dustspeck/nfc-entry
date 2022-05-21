const SECRET = process.env.SECRET;

const protectRoute = async (req, res, next) => {
	try {
		if (!req.headers.key) throw 'no_key_provided';
		if (req.headers.key !== SECRET) throw 'invalid_key';
		next();
	} catch (error) {
		console.error(error);
		res.status(401).json({ error: 'Unauthorized' });
	}
};

module.exports = { protectRoute };
