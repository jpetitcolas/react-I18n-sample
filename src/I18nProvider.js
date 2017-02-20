import { Children, PropTypes } from 'react';
import Polyglot from 'node-polyglot';

import { withContext } from 'recompose';

import messages from './messages';

const withI18nContext = withContext({
    locale: PropTypes.string.isRequired,
    translate: PropTypes.func.isRequired,
}, ({ locale }) => {
    const polyglot = new Polyglot({
        locale,
        phrases: messages[locale],
    });

    const translate = polyglot.t.bind(polyglot);

    return { locale, translate };
});

export const I18nProvider = ({ children }) => Children.only(children);

export default withI18nContext(I18nProvider);
