'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { addLocaleData, IntlProvider } from 'react-intl';

import zhCN from './i18n/zh_CN';
import enUS from './i18n/en_US';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';

import Builds from './page/Builds';
import Setting from './page/Setting';
import Insight from './page/Insight';
import OneBuild from './page/OneBuild';
import BuildLog from './page/BuildLog';
import SnsAuthorize from './page/SnsAuthorize';

import './index.less';

addLocaleData([
  ...en,
  ...zh,
]);

const chooseLocale = () => {
  const language = window.localStorage.RELIABLE_LANGUAGE || window.navigator.language;
  switch (language) {
    case 'zh-CN':
    case 'zh-HK':
    case 'zh-TW':
    case 'zh':
      return {
        locale: 'zh-CN',
        messages: zhCN,
      };
    default:
      return {
        locale: 'en-US',
        messages: enUS,
      };
  }
};
const lang = chooseLocale();

ReactDOM.render(
  <IntlProvider
    locale={lang.locale}
    messages={lang.messages}
  >
    <BrowserRouter>
      <div>
        <Route exact path="/" component={ Builds } />
        <Route exact path="/setting" component={ Setting } />
        <Route exact path="/buildinfo" component={ OneBuild } />
        <Route exact path="/buildlog" component={ BuildLog } />
        <Route exact path="/insight" component={ Insight } />
        <Route exact path="/snsAuthorize/auth" component={ SnsAuthorize } />
      </div>
    </BrowserRouter>
  </IntlProvider>,
  document.querySelector('#app')
);
