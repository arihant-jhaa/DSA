class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    /** 
     * @param {number} key
     * @param {number} value
     * @param {number} duration time until expiration in ms
     * @return {boolean} if un-expired key already existed
     */
    set(key, value, duration) {
        const exists = this.cache.has(key);

        if (exists) {
            clearTimeout(this.cache.get(key).timer);
        }

        const timer = setTimeout(() => {
            this.cache.delete(key);
        }, duration);

        this.cache.set(key, { value, timer });
        return exists;
    }

    /** 
     * @param {number} key
     * @return {number} value associated with key
     */
    get(key) {
        return this.cache.has(key) ? this.cache.get(key).value : -1;
    }

    /** 
     * @return {number} count of non-expired keys
     */
    count() {
        return this.cache.size;
    }
}
