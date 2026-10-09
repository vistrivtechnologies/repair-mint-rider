import React, {createContext, useContext, useState} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';


interface ModalProps {
  showLoader: () => void;
  hideLoader: () => void;
}

const ModalContext = createContext<ModalProps | undefined>(undefined);

export const CommonLoaderProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  //Class States
  const [modalShow, setModalShow] = useState(false);

  const showLoader = () => {
    setModalShow(true);
  };

  const hideLoader = () => {
    setModalShow(false);
  };

  return (
    <ModalContext.Provider value={{showLoader, hideLoader}}>
      {children}
      <Modal
        style={styles.modalBackground}
        isVisible={modalShow}
        coverScreen={true}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        backdropOpacity={0.8}>
        <View style={styles.loaderView}>
        {/* <FastImage
          source={require('../../assets/gif/aradaCircularLoader.gif')}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        /> */}
        </View>
      </Modal>
    </ModalContext.Provider>
  );
};

export const CommonLoader = (): ModalProps => {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error('CommonLoader must be used within a ModalProvider');
  }
  return modalContext;
};
