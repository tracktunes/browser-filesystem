// Based on https://stackoverflow.com/questions/17575790
export function isBrowser(): boolean {
    try {
        return this === window;
    }
    catch (err) {
        return false 
    }    
}
