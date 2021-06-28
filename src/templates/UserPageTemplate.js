import React from 'react';
import Sidebar from 'components/organisms/Sidebar';

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

export default UserPageTemplate;
