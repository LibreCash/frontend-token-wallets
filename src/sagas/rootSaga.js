import { all, fork } from 'redux-saga/effects';
import { formActionSaga } from 'redux-form-saga';

import appSaga from './app/appSaga';
import dashboardSaga from './app/dashboardSaga';
import registerTokenSaga from './app/registerTokenSaga';
import signUpSaga from './auth/signUpSaga';
import signInSaga from './auth/signInSaga';
import recoveryPasswordSaga from './auth/recoveryPasswordSaga';

export default function* () {
  yield all([
    fork(formActionSaga),
    fork(appSaga),
    fork(dashboardSaga),
    fork(registerTokenSaga),
    fork(signUpSaga),
    fork(signInSaga),
    fork(recoveryPasswordSaga)
  ]);
}
