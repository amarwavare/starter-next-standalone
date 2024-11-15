export class StorageService {
    constructor() {};

    // Session Storage Methods

    public static setSession({key, value}: {key: string, value: string}) {        
        sessionStorage.setItem(key, value);
    }

    public static getSession({key}: {key: string}): string|null {
        if (typeof sessionStorage !== 'undefined') {
            return sessionStorage.getItem(key);
        } else {
            return null;
        }
    }

    public static removeSession({key}: {key: string}) {
        sessionStorage.removeItem(key);
    }

    public static setSecureSession({key, value}: {key: string, value: string}) {
        // TODO: Store original value by aesEncryption
        sessionStorage.setItem(key, value);
    }

    public static getSecureSession({key}: {key: string}): string|null {
        if (typeof sessionStorage !== 'undefined') {
            const storageValue: string|null = sessionStorage.getItem(key);
            // TODO: Return decrypted original value
            return storageValue
        } else {
            return null
        }
    }

    // Local Storage Methods

    public static setLocal({key, value}: {key: string, value: string}) {
        localStorage.setItem(key, value);
    }

    public static getLocal({key}: {key: string}): string|null {
        return localStorage.getItem(key);
    }

    public static removeLocal({key}: {key: string}) {
        localStorage.removeItem(key);
    }

    public static setSecureLocal({key, value}: {key: string, value: string}) {
        // TODO: Store original value by aesEncryption
        localStorage.setItem(key, value);
    }

    public static getSecureLocal({key}: {key: string}): string|null {
        if (typeof localStorage !== 'undefined') {
            const storageValue: string|null = localStorage.getItem(key);
            // TODO: Return decrypted original value
            return storageValue;
        } else {
            return null;
        }
    }
}