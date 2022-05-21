const { GoogleSpreadsheet } = require('google-spreadsheet');
const key = require('./googleKey.json');

var doc = null;

(async function () {
	try {
		const SHEET_ID = process.env.SHEET_ID;
		doc = new GoogleSpreadsheet(`${SHEET_ID}`);

		await doc.useServiceAccountAuth(key);
		await doc.loadInfo();
		console.log(doc.title);
	} catch (error) {
		console.log(error);
	}
})();

const addDataToSheet = async (data) => {
	try {
		const sheet = doc.sheetsByIndex[0];
		await sheet.addRow(data);
	} catch (error) {
		console.error(error);
	}
};

module.exports = { addDataToSheet };
