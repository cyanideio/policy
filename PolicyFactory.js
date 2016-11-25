const ErrorThrowerFactory = require('phoenix-error').ErrorThrowerFactory

/** Builds Policies */
class PolicyFactory {
	constructor(opt){
		this.errorThrowerFactory = new ErrorThrowerFactory({
			conf: opt.error_conf
		})
	}
	build(policy_name) {
		let Policy = require(`./policies/${policy_name}`)
		return new Policy({
			errorThrower: this.errorThrowerFactory.build(policy_name)	
		})
	}
}

module.exports = PolicyFactory