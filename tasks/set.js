var hb = require('handlebars')
var workflow = require('../')
var debug = require('debug')('workflow:activities:set')
// example
// name="obj1.prop1[1]"
// value="obj.prop2.prop3"

module.exports = function(node) {
	return function (context) {

		return function(done) {
			var value = workflow.readValue(node.value, context)
			debug("setting value %s as %s", value, node.name);
			workflow.setValue(context, node.name, value)
			done();
		}
	}
}