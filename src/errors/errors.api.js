export class ApiErrors extends Error{
    constructor(status, message, success) {
        super();
        this.status = status
        this.message = message
        this.success = success
    }

    static badRequest(message) {
        return new ApiErrors(400, message, false)
    }
}