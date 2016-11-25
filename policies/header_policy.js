const BasePolicy = require('../base')

/** Class for User Policy */
class HeaderPolicy extends BasePolicy {

	/**
	 * Judges whether a request or user object
	 * @param {user}
	 * @return {Boolean}
	 */
	static _approve(requestValidator) {
		if (!requestValidator.target.auth_header) {
			return true
		}
		return requestValidator.hasAuthKey
	}

}

module.exports = HeaderPolicy