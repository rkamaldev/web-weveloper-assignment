/* eslint-disable no-undef */
import React from 'react';
import * as nextRouter from 'next/router';
import renderer from 'react-test-renderer';

import Error from './';

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    CONTACT_EMAIL: 'test@test.com',
  },
}));

describe('#Error', () => {
  it('Should render error component with support email id', () => {
    // eslint-disable-next-line no-import-assign
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));
    const component = renderer.create(<Error />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
