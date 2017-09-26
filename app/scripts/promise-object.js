class Promise {
    constructor() {
        this.then = function(successFunc, errFunc) {
            return Promise;
        };
        this.done = function(successFunc) {
            return Promise;
        };
        this.error = function(errFunc) {
            return Promise;
        };
    }
}