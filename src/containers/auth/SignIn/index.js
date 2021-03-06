import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, CardGroup, Card, CardBody } from 'reactstrap';

import { namedRoutes } from '../../../routes';
import { signIn, verifySignIn } from '../../../redux/modules/auth/signIn';

import SignInForm from '../../../components/auth/SignInForm';
import VerifySignInForm from '../../../components/auth/VerifySignInForm';

const SignIn = (props) => {
  const {
    step,
    user,
    fetching
  } = props;

  const renderStep = (currentStep) => {
    switch (currentStep) {
      case 'signIn':
        return (
          <SignInForm
            onSubmit={signIn}
            fetching={fetching}/>
        );
      case 'verifySignIn':
        return (
          <VerifySignInForm
            onSubmit={verifySignIn}
            fetching={fetching}
            initialValues={{
              verification: {
                verificationId: user.verification.verificationId
              }
            }}/>
        );
      default:
        return 'Something went wrong';
    }
  };

  return (
    <Col md="8">
      <CardGroup>
        <Card className="p-lg-4 p-md-2">
          <CardBody>
            {renderStep(step)}
          </CardBody>
        </Card>
        <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
          <CardBody className="text-center">
            <div>
              <h2>Sign up</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
              </p>
              <Link to={namedRoutes.signUp} color="primary" className="btn btn-primary active mt-3">Sign Up Now!</Link>
            </div>
          </CardBody>
        </Card>
      </CardGroup>
      <Card className="text-white bg-primary py-lg-5 py-md-2 d-xs-block d-sm-block d-md-block d-lg-none">
        <CardBody className="text-center">
          <div>
            <h2>Sign up</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
            </p>
            <Link to={namedRoutes.signUp} color="primary" className="btn btn-primary active mt-3">Sign Up Now!</Link>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

const ConnectedComponent = connect((state) =>
  ({ ...state.auth.signIn }))(SignIn);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
