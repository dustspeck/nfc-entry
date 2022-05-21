const { initSheet, addDataToSheet } = require('../config/sheet.config');
const { fetchStudent, checkBool, setBool } = require('../handlers/sb.handler');

const markEntry = async (req, res) => {
	try {
		const { card_no } = req.body;

		console.log(`card_no: ${card_no}`);

		if (!card_no) throw 'no_card_number';

		const studentData = await fetchStudent(card_no);
		if (studentData.error) throw 'student_data_failure';

		console.info(studentData);

		const check = await checkBool(card_no);
		if (check.error) throw 'check_bool_failure';

		if (typeof check.data.bool !== 'boolean') throw 'bool_type_error';

		if (check.data.bool === true) {
			res.status(200).json({ status: 'warning', message: 'Attendance Already Marked' });
			return;
		}

		const set = await setBool(card_no);
		if (set.error) throw 'set_bool_failure';
		console.info(`Marked for: ${card_no}`);

		await addDataToSheet(studentData.data);
		console.info(`Data added: ${JSON.stringify(studentData.data)}`);

		res.status(200).json({ status: 'success', message: 'Attendance Marked' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: 500, message: `Error occurred.` });
	}
};

const getData = async (req, res) => {
	try {
		const { card_no } = req.body;

		console.log(`card_no: ${card_no}`);

		if (!card_no) throw 'no_card_number';

		const studentData = await fetchStudent(card_no);
		if (studentData.error) throw 'student_data_failure';

		console.info(studentData);

		res.status(200).json({ status: 'success', data: studentData.data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ status: 500, message: `Error occurred.` });
	}
};

module.exports = { markEntry, getData };
