function Request() {
  this.url = "";
  this.payload = {};
}
function RequestBuilder() {
  this.request = new Request();
  this.forUrl = function (url) {
    this.request.url = url;
    return this;
  };
  this.payload = function (payload) {
    this.request.payload = payload;
    return this;
  };
  this.build = function () {
    return this.request;
  };
}
module.exports = RequestBuilder;

//-------------------------

const expect = require("chai").expect;
describe("builder test", () => {
  it("sanity", () => {
    var requestBuilder = new RequestBuilder();
    var request = requestBuilder
      .forUrl("http://something/users")
      .payload(null).build();
    expect(request.method).to.equal(null);
  });
});
