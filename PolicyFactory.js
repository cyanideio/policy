const ErrorThrowerFactory = require('cyanide-error').ErrorThrowerFactory

/** Builds Policies */
class PolicyFactory {

	constructor(opt){
		this.policy_path = opt.policy_path
		this.errorThrowerFactory = new ErrorThrowerFactory({
			conf: opt.error_conf
		})
	}

	/**
	 * Build
	 * @param  {String} policy_name [description]
	 * @return {Policy}             [description]
	 */
	build(policy) {
		var policy_name
		var policy_args
		if (typeof(policy) === 'string') {
			policy_name = policy
			policy_args = {}
		}
		if (typeof(policy) === 'object') {
			policy_name = policy.name
			policy_args = policy.args
		}
		let Policy = require(`../../${this.policy_path}/${policy_name}`)
		return new Policy({ 
			errorThrower: this.errorThrowerFactory.build(policy_name),
			args: policy_args
		})
	}
	
}

module.exports = PolicyFactory