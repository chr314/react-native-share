import {
  Social,
  IsPackageInstalledResult,
  ActivityType,
  ShareAsset,
  ShareOptions,
  ShareSingleOptions,
} from './types';
import Overlay from './components/Overlay';
import Sheet from './components/Sheet';
import Button from './components/Button';
import ShareSheet from './components/ShareSheet';
import RNShare from './RNShare';

export { Overlay, Sheet, Button, ShareSheet, ShareAsset, Social };
export type { ShareSingleOptions, ShareOptions, ActivityType, IsPackageInstalledResult };
export type { OverlayProps } from './components/Overlay';
export type { SheetProps } from './components/Sheet';
export type { ButtonProps } from './components/Button';
export type { ShareSheetProps } from './components/ShareSheet';

export default RNShare;
