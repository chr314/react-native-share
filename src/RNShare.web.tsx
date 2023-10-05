import Overlay from './components/Overlay';
import Sheet from './components/Sheet';
import Button from './components/Button';
import ShareSheet from './components/ShareSheet';
import checkPermissions from './helpers/checkPermissions';
import {
  Social,
  IsPackageInstalledResult,
  ShareOpenResult,
  ShareOptions,
  ShareSingleOptions,
  ShareSingleResult,
} from './types';
import { normalizeShareOpenOptions } from './helpers/options';

const RNShare = {
  Button,
  ShareSheet,
  Overlay,
  Sheet,

  Social,

  async open(options: ShareOptions): Promise<ShareOpenResult> {
    await checkPermissions(options);

    options = normalizeShareOpenOptions(options);

    if (window.navigator.share === undefined) {
      throw new Error('Share is not supported in this browser');
    }

    return window.navigator
      .share({
        title: options.title,
        text: options.message,
        url: options.url,
      })
      .then(() => ({
        success: true,
        message: 'OK',
      }))
      .catch((error) => {
        return {
          success: false,
          message: error.message,
        };
      });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async shareSingle(options: ShareSingleOptions): Promise<ShareSingleResult> {
    throw new Error('Not implemented');
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async isPackageInstalled(packageName: string): Promise<IsPackageInstalledResult> {
    throw new Error('Not implemented');
  },
} as const;

export default RNShare;
