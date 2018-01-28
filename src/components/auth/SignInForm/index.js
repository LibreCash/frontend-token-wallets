import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { Row, Col, Button, Alert } from 'reactstrap';

import { namedRoutes } from '../../../routes';
import { emailValidate, passwordValidate } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';
import RenderPasswordInput from '../../forms/RenderPasswordInput';

const SignInForm = (props) => {
  const {
    handleSubmit,
    invalid,
    error
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <p className="text-muted">Sign In to your account</p>

      <Field
        component={RenderInput}
        icon={<i className="icon-user"/>}
        name="email"
        type="email"
        placeholder="E-mail"
        validate={emailValidate}/>

      <Field
        component={RenderPasswordInput}
        name="password"
        type="password"
        placeholder="Password"
        validate={passwordValidate}/>

      {error ? <Alert color="danger">{error}</Alert> : null}

      <Row>
        <Col xs="6">
          <Button color="primary" className="px-4" disabled={invalid}>Login</Button>
        </Col>
        <Col xs="6" className="text-right">
          <Link to={namedRoutes.recoveryPassword} color="link" className="btn btn-link px-0">Forgot password?</Link>
        </Col>
      </Row>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'signIn',
  initialValues: {
    email: '',
    password: ''
  }
})(SignInForm);

export default FormComponent;
