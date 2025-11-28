/*
 * Public API Surface of uiowa-header
 */

import { UiowaFooter } from './lib/uiowa-footer/uiowa-footer';
import { UiowaHeader } from './lib/uiowa-header/uiowa-header';
import { UiowaNav } from './lib/uiowa-nav/uiowa-nav';

export * from './lib/click-outside';
export * from './lib/login.service';
export * from './lib/models';
export * from './lib/uiowa-footer/uiowa-footer';
export * from './lib/uiowa-header/uiowa-header';
export * from './lib/uiowa-nav/uiowa-nav';

export const UiowaLayout = [UiowaHeader, UiowaNav, UiowaFooter];
