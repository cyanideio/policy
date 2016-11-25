/** Class for User Policy */
class BasePolicy {
	/**
	 * Initializer with options
	 * @param {opt}
	 */
	constructor(opt) {
		this.errorThrower = opt.errorThrower
	}

	/**
	 * In Class Approve Method
	 * Calls the constructor method
	 * @param  {validator} validator [description]
	 */
	approve(validator) {
		if (!this.constructor._approve(validator)) {
			this.throwError()
		}
	}

	/**
	 * Judges whether a request or user object
	 * @param {user}
	 * @return {Boolean}
	 */
	static _approve(validator) {
		// Throws unimplemented error
		throw new Error('Unimplemented')
	}

	throwError(){
		this.errorThrower.throw()
	}


}

module.exports = BasePolicy