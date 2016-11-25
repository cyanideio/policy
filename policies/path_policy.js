const BasePolicy = require('../base')

/** Class for User Policy */
class PathPolicy extends BasePolicy {

	/**
	 * Judges whether a request or user object
	 * @param {user}
	 * @return {Boolean}
	 */
	static _approve(requestValidator) {
		return requestValidator.paths.indexOf(requestValidator.pathRoot) > -1
	}

}

module.exports = PathPolicy