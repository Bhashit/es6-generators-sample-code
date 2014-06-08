function async(genertorFactory) {
	var generator = genertorFactory.apply(this, arguments);
	var handleResult = function(result) {
		console.log(result.done)
		console.log(result.value)
		if(result.done) return result.value;
		// In our example, the result.value would be a jqXHR object, which has a
		// then() method that is similar in its contract to the Promise objects
		// specified in A+ promises (for ex. https://www.promisejs.org/)
		return result.value.then(function(nextResult) {
			// Push the result back to the generator. This will be the
			// return value of the corresponding yield operation.
			return handleResult(generator.next(nextResult));
		}, function(error) {
			// Propagate the error back to the generator. This exception will be
			// thrown from the current suspended context of the generator, as if
			// the yield statement that is currently suspended were a `throw`
			// statement.
			generator.throw(error);
		})
	};
	return handleResult(generator.next());
}