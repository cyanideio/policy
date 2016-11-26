const ErrorThrowerFactory = require('cyanide-error').ErrorThrowerFactory

/** Builds Policies */
class PolicyFactory {
	constructor(opt){
		this.policy_path = opt.policy_path
		this.errorThrowerFactory = new ErrorThrowerFactory({
			conf: opt.error_conf
		})
	}
	build(policy_name) {
		let Policy = require(`${this.policy_path}/${policy_name}`)
		return new Policy({
			errorThrower: this.errorThrowerFactory.build(policy_name)	
		})
	}
}

module.exports = PolicyFactory