import NfcManager, {NfcTech} from 'react-native-nfc-manager';

NfcManager.start();

const readNdef = async () => {
  console.log('Reading Started...');
  let tag = null;
  try {
    await NfcManager.requestTechnology(NfcTech.Ndef);
    tag = await NfcManager.getTag();
  } catch (error) {
    console.warn(error);
  } finally {
    NfcManager.cancelTechnologyRequest();
    console.log('Reading Stopped.');
    return tag;
  }
};

export const stopNfcManager = () => {
  NfcManager.cancelTechnologyRequest();
};

export const readCardUID = async () => {
  let cardId = null;
  try {
    const cardData = await readNdef();
    if (cardData) {
      if (cardData.id) {
        cardId = cardData.id;
      }
    }
  } catch (error) {
    console.warn(error);
  } finally {
    return cardId;
  }
};
