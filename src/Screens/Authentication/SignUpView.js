import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import UpperView from '../../Components/TicketView/UpperView';
import BottomView from '../../Components/TicketView/BottomView';
import PhoneNoInput from '../../Components/Input/PhoneNoInput';
import NormalButton from '../../Components/Button/NormalButton';
import DashedLine from '../../Components/Other/DashedLine';
import {AuthHeaderType, TEXT} from '../../Constants';
import {styles} from './styles';
import {AuthStageContext} from "./context";

function SignupView({onClickContinue}) {
    // const [PhoneNumber, SetPhoneNumber] = React.useState('');
    //
    // const onChangeNumber = text => SetPhoneNumber(text);
    const controller = useContext(AuthStageContext);
    return (
        <>
            <UpperView type={AuthHeaderType.SIGN_UP}/>
            <DashedLine/>
            <BottomView>
                <Text style={styles.titleText}>{TEXT.HELLO_THERE}</Text>
                <Text style={styles.shortText}>{TEXT.CONT_MOBILE_NO}</Text>
                <View style={styles.textInputView}>
                    <Text style={styles.mobileNo}>{TEXT.MOBILE_NO}</Text>
                    <PhoneNoInput
                        PhoneNumber={controller.mobile}
                        onChangeText={controller.setMobile}
                    />
                    <NormalButton
                        buttonStyle={styles.buttonStyle}
                        buttonLabel="Continue"
                        onPress={onClickContinue}
                    />
                </View>
            </BottomView>
        </>
    );
}

export default SignupView;
