# UIowa Header

An Angular library for common website header, including a UIowa branding bar and a website nav bar. This library also handles impersonation use case.

You might also want to check out libraries [@uiowa/universal-workflow](https://github.com/changhuixu/uiowa-universal-workflow), [@uiowa/spinner](https://github.com/changhuixu/spinner), [session-expiration-alert](https://github.com/changhuixu/session-expiration-alert), [@uiowa/date-range-picker](https://github.com/changhuixu/date-range-picker), [@uiowa/digit-only](https://github.com/changhuixu/ngx-digit-only) and [@uiowa/uiowa-mfk](https://github.com/changhuixu/uiowa-mfk-project).

[![Build Status](https://github.com/changhuixu/uiowa-header-demo/actions/workflows/main.yml/badge.svg)](https://github.com/changhuixu/uiowa-header-demo/actions)
[![npm](https://img.shields.io/npm/v/@uiowa/uiowa-header.svg?style=flat-square)](https://www.npmjs.com/package/@uiowa/uiowa-header)
![Web Content Accessibility](https://img.shields.io/badge/Accessibility-100-brightgreen.svg?longCache=true&style=flat-square)

## [Demo](https://changhuixu.github.io/uiowa-header-demo/)

**v21** Dependencies: Angular >=21. Standalone component style.

**v19** Dependencies: Angular >=19

**v17** Dependencies: Angular >=17

**v13** Dependencies: Angular >=13

**v12.1.1** Dependencies: Angular >=12

**v12** Dependencies: Angular >=12, ng-bootstrap >=10, Bootstrap >=4.5 (css)

**v10** Dependencies: Angular >=10, ng-bootstrap >=7, Bootstrap >=4.5 (css)

**v9** Dependencies: Angular >=9, ng-bootstrap >=6, Bootstrap >=4 (css)

**v6 ~ v8** Dependencies: Angular >=6, ng-bootstrap >=2, Bootstrap >=4 (css)

## Library Details

### Models

- `ExternalLink`: static link listed in navigation menu bar. eg, Employee Self Service site link. (Optional)
- `InternalRoute`: route for pages in your app.
- `HeaderUser`: used to display user name and/or original user name when impersonation.
- `BannerLinks`: static link listed in Uiowa branding bar. eg, Employee Self Service site link. Maximum two links. (Optional)

### Features

- Responsive header and footer layout with Hawkeye color styles
- Support application Nav menus with dropdown sub menus.
- Provide `LoginService` with default implementations for `login()` and `logout()` methods which correspond to click event from login and logout buttons. By default, you don't need to do extra work for login/logout. The two methods follow .NET Core convention redirect to routes `account\login` and `account\logout`, respectively. `LoginService` has a public member `returnUri` (string, default empty), which is the return uri after login.

  If you want to customize login and/or logout process, you can provide your customized service via dependency injection. eg,

  ```typescript
  export const appConfig: ApplicationConfig = {
    providers: [
      ...,
      { provide: LoginService, useClass: HawkIdLoginService },
      ...,
    ],
  };
  ```

- When user is impersonating and wants to stop impersonation, user dropdown will show a link which would emit a `stopImpersonation` event. You can handle this event accordingly.

- Follow web content accessibility guidelines.
