/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './';

describe('#Footer', () => {
  it('Should render Footer component with given config', () => {
    const component = renderer.create(
      <Footer
        footerItems={[
          {
            type: 'link',
            link: 'https://www.zurich.com/contact-us',
            content: 'Contact us',
            target: '',
          },
          {
            type: 'link',
            link: 'https://www.zurich.com/services/privacy',
            content: 'Privacy',
            target: '_blank',
          },
          {
            type: 'text',
            content: '© 2023 Rights Reserved',
          },
        ]}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render Footer component without config', () => {
    const component = renderer.create(<Footer />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
