describe('price calculator', function(){

	it('should calc price right', function(){
		var options = {
			userType: 0,
			productType: 0,
			price: 1,
			publishedDate: new Date(),
		}

		var expected = 16;
		var actual = calculatePrice(options);
		expect(expected).to.equal(actual);
	});

	it('should fail', function(){
		var options = {
			userType: 0,
			productType: 3,
			price: 1,
			publishedDate: new Date(),
		}

		var expected = 0;
		var actual = calculatePrice(options);
		expect(expected).to.equal(actual);
	});

});