import axios from 'axios';
import {baseURL, string} from '../../config/server.config';

const headers = {
  key: string,
};

export const fetchStudentData = async card_no => {
  let data = null;
  try {
    const studentData = await axios.post(
      `${baseURL}/data`,
      {card_no},
      {headers},
    );
    if (studentData.data)
      if (studentData.data.data) data = studentData.data.data;
    console.log(data);
  } catch (error) {
    console.log(error);
    data = null;
  } finally {
    return data;
  }
};

export const postAttendance = async card_no => {
  let message = null;
  try {
    const studentData = await axios.post(
      `${baseURL}/mark`,
      {card_no},
      {headers},
    );
    if (studentData.data)
      if (studentData.data.message) message = studentData.data.message;
    console.log(message);
  } catch (error) {
    console.log(error);
    message = null;
  } finally {
    return message;
  }
};
