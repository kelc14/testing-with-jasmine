
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({amount:10000, years:5, rate:5})).toEqual(188.71);
  expect(calculateMonthlyPayment({amount:20000, years:6, rate:9})).toEqual(360.51);
  expect(calculateMonthlyPayment({amount:30000, years:20, rate:4})).toEqual(181.79);
});


// it("should return a result with 2 decimal places", function() {
//   // ..
// });

/// etc
