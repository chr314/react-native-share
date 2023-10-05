import { ShareOptions } from '../types';
import { isWeb } from './platform';

export default async function checkPermissions({
  title,
  message,
  url,
}: Pick<ShareOptions, 'url' | 'urls' | 'message' | 'title'>) {
  if (isWeb()) {
    if (!window.navigator.share) {
      throw new Error('Share is not supported in this browser');
    }
    // @ts-ignore
    if (!window.navigator.canShare?.({ url, title, message })) {
      throw new Error('This content cannot be shared');
    }
  }
}
