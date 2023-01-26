import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './footer.module.scss';

function Footer(props) {
  const { footerItems } = props;

  return (
    <div className={styles.footerComponent}>
      {footerItems &&
        footerItems.length &&
        footerItems.map((item, index) => (
          <div key={index}>
            {item.type === 'link' && (
              <Link className={styles.link} href={item.link} target={item.target}>
                {item.content}
              </Link>
            )}

            {item.type === 'text' && <span className={styles.text}>{item.content}</span>}
          </div>
        ))}
    </div>
  );
}

Footer.propTypes = {
  footerItems: PropTypes.any,
};

export default Footer;
