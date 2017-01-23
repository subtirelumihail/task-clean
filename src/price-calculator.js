var calculatePrice = function (options) {
	// Load options
	var userType = options.userType; // 0 = normal, 1 = company
	var productType = options.productType; // 0 = new product, 1 = old product
	var publishedDate = options.publishedDate;
	var price = options.price;

	// Defaults
	var dateNow = new Date();
  var rebateDefaultValue = 0;
	var productDefaultsByType = {
		0: { // new product
			price: 25,
		},
		1: { // old product
			price: 35,
		},
	};

	// Rebate rules
	var userIsCompany = userType === 1;
	var productIsNew = productType === 0;
	var productIsPublishedToday = publishedDate.toDateString() === dateNow.toDateString();

	// Calculate the rebate
	var rebateValue = rebateDefaultValue;
	if (productIsNew && productIsPublishedToday) {
		rebateValue += 10;
	}

	if (userIsCompany) {
		rebateValue += 5;
	}

	// Calculate price
	try	{
		return price + productDefaultsByType[productType].price - rebateValue;
	}	catch (ex)	{
		console.log('[calculatePrice]', ex, options);
	}

	return 0;
}
