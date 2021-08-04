import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../App";
import ShowTickets from "../ShowTickets";
import OAuthFlow from "../OAuthFlow";

describe("tests App", () => {
  let tree;
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
    tree = shallow(<App></App>);
  });
  describe("containes all defined routes", () => {
    it("has /tickets route", () => {
      expect(tree.find("Route[path='/tickets']").length).toEqual(1);
      expect(tree.find("Route[path='/tickets']").prop("component")).toEqual(
        ShowTickets
      );
    });
    it("has index route / route", () => {
      expect(tree.find("Route[path='/']").length).toEqual(1);
      expect(tree.find("Route[path='/']").prop("component")).toEqual(OAuthFlow);
    });
    it("has default route * route", () => {
      expect(tree.find("Route[path='*']").length).toEqual(1);
      expect(tree.find("Route[path='*']").find("div").text()).toEqual(
        "No Page with this Route"
      );
    });
  });
});
