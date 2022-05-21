import {View, Dimensions, Text, Button, ToastAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import {readCardUID, stopNfcManager} from './helpers/nfc.helper';
import {revHexToDec} from './helpers/misc.helper';
import {initSheet} from './config/sheet.config';
import Header from './components/Header';
import LastScanCard from './components/LastScanCard';
import ScanButton from './components/ScanButton';
import ScanCard from './components/ScanCard';
import MarkDash from './components/MarkDash';
import {fetchStudentData, postAttendance} from './helpers/api.helper';

const MainApp = () => {
  const {height, width} = Dimensions.get('screen');

  const [cardID, setCardID] = useState(null);
  const [isReading, setIsReading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isMarking, setIsMarking] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [lastData, setLastData] = useState(null);

  const getCardUID = async () => {
    try {
      setIsReading(true);
      setCardID(null);
      const id = await readCardUID();
      setCardID(id);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsReading(false);
    }
  };

  const getStudentInfo = async () => {
    try {
      setIsFetching(true);
      const card_no = revHexToDec(cardID);
      const data = await fetchStudentData(card_no);
      setCurrentData(data);
      setHasFetched(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  };

  const markAttendance = async () => {
    try {
      setIsMarking(true);
      const card_no = revHexToDec(cardID);
      const message = await postAttendance(card_no);
      if (message) ToastAndroid.show(`${message}`, ToastAndroid.SHORT);
      setLastData(currentData);
      setIsMarking(false);
      setCurrentData(false);
      setHasFetched(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  };

  const rejectAttendance = async () => {
    setIsRejecting(true);
    setTimeout(() => {
      setIsRejecting(false);
      setCurrentData(false);
      setHasFetched(false);
    }, 100);
  };

  useEffect(() => {
    if (cardID) getStudentInfo();
  }, [cardID]);
  return (
    <View style={{backgroundColor: '#dfe4ea', height, width}}>
      <Header />

      <ScanCard
        data={currentData}
        isFetching={isFetching}
        isReading={isReading}
      />

      {!hasFetched && (
        <ScanButton
          isReading={isReading}
          isFetching={isFetching}
          onScan={getCardUID}
          onStop={stopNfcManager}
        />
      )}

      {hasFetched && (
        <MarkDash
          onMark={markAttendance}
          onReject={rejectAttendance}
          isMarking={isMarking}
          isRejecting={isRejecting}
          data={currentData}
        />
      )}

      <LastScanCard data={lastData} />
    </View>
  );
};

export default MainApp;
