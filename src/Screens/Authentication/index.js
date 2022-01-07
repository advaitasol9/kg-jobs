import React from 'react';
import {View} from 'react-native';

import MainContainer from '../../Components/Other/MainContainer';
import {styles} from './styles';
import TicketContainer from './ticketContainer';
import {AuthStageContext} from "./context";
import {useAuthenticationController} from "./controller";

export default function Authentication() {
    const controller = useAuthenticationController();
    return (
        <AuthStageContext.Provider value={controller}>
            <MainContainer>
                <View style={styles.mainContainerView}>
                    <TicketContainer/>
                </View>
            </MainContainer>
        </AuthStageContext.Provider>
    );
}
