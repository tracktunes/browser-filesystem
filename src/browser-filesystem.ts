import { isBrowser } from './functions/is-browser';

export class BrowserFilesystem {

    constructor(options: BrowserFilesystemOptions = {}) {
        if (!isBrowser()) {
            throw new Error('This code only runs in a browser context');
        }
        if (!window.webkitRequestFileSystem) {
            throw new Error('No Filesystem API in this browser');
        }
    }
}
