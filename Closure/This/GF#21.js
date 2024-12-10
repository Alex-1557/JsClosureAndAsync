class Request {
  constructor() {
    this.url = "";
    this.payload = {};
  }
}
class RequestBuilder {
  constructor() {
    this.request = new Request();
  }
  forUrl(url) {
    this.request.url = url;
    return this;
  }
  payload(payload) {
    this.request.payload = payload;
    return this;
  }
  build() {
    return this.request;
  }
}
export default RequestBuilder;

//--------------------------
const expect = require("chai").expect;
describe("builder es6 test", () => {
  it("sanity", () => {
    const requestBuilder = new RequestBuilder();
    const url = "http://something/users";
    const request = requestBuilder
      .forUrl(url).payload(null).build();
    expect(request.payload).to.be.null;
    expect(request.url).to.equal(url);
  });
});
