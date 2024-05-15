import React from 'react';
import PageWithCompleteness from '../../../_components/PageWithCompleteness/PageWithCompleteness';
import AuthenticationService from './AuthenticationService/AuthenticationService';

const SecurityPage = () => {
  return (
    <PageWithCompleteness>
      <AuthenticationService />
    </PageWithCompleteness>
  );
};

export default SecurityPage;
