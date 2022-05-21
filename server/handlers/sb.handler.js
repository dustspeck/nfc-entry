const supabase = require('../config/sb.config');

const fetchStudent = async (card_no) => {
	let response = { data: {}, error: false };
	try {
		const { data, error } = await supabase.from('idcards').select('*').eq('card_no', card_no).single();
		if (error) throw error.message;
		response.data = data;
	} catch (error) {
		response.error = true;
		console.log(error);
	} finally {
		return response;
	}
};

const setBool = async (card_no) => {
	let response = { data: {}, error: false };
	try {
		const { data, error } = await supabase.from('idcards').update({ bool: true }).eq('card_no', card_no).single();
		if (error) throw error.message;
		response.data = data;
	} catch (error) {
		response.error = true;
		console.log(error);
	} finally {
		return response;
	}
};

const checkBool = async (card_no) => {
	let response = { data: {}, error: false };
	try {
		const { data, error } = await supabase.from('idcards').select('bool').eq('card_no', card_no).single();
		if (error) throw error.message;
		response.data = data;
	} catch (error) {
		response.error = true;
		console.log(error);
	} finally {
		return response;
	}
};

module.exports = { fetchStudent, setBool, checkBool };
