class PingController {

    getInfo(req, res, next) {
        try {
            return res.json({success: true, message: 'Dogshouseservice.Version1.0.1'})
        } catch(e) {
            next(e)
        }
    }
}

export default new PingController()