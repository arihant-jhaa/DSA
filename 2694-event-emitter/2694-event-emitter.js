class EventEmitter {
    constructor() {
        // Map of eventName -> Array of unique subscription objects: [{ callback }, ...]
        this.events = new Map();
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        // Wrap callback in a unique object reference to distinguish duplicate callbacks
        const subscription = { callback };
        const listeners = this.events.get(eventName);
        listeners.push(subscription);

        return {
            unsubscribe: () => {
                const index = listeners.indexOf(subscription);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events.has(eventName)) {
            return [];
        }

        // Execute all active callbacks in subscription order and collect results
        return this.events.get(eventName).map(sub => sub.callback(...args));
    }
}
