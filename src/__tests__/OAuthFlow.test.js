import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import OAuthFlow from "../OAuthFlow.jsx";

describe("tests OAuthFlow", () => {
  let tree;
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
    tree = shallow(<OAuthFlow></OAuthFlow>);
  });
  describe("tests componentDidMount", () => {
    it("tests when isAuthorized is true", () => {
      Storage.prototype.getItem = jest.fn(() => true);
      tree.instance().componentDidMount();
      expect(tree.state().redirectToTickets).toBeTruthy();
    });
    it("tests when isAuthorized is false and url includes access_token", () => {
      Storage.prototype.getItem = jest.fn(() => false);
      Location.prototype.toString = jest.fn(() => "access_token");
      tree.instance().componentDidMount();
      expect(tree.state().redirectToTickets).toBeTruthy();
    });
    it("tests when isAuthorized is false and url does not include access_token", () => {
      Storage.prototype.getItem = jest.fn(() => false);
      Location.prototype.toString = jest.fn(() => "error");
      tree.instance().componentDidMount();
      expect(tree.state().redirectToTickets).toBeTruthy();
    });
  });
  describe("render", () => {
    it("renders Redirect Component when redirectToTickets is true", () => {
      tree.setState({ redirectToTickets: true });
      expect(tree.find("Redirect").length).toEqual(1);
    });
    it("does not render Redirect Component when redirectToTickets is false", () => {
      tree.setState({ redirectToTickets: false });
      expect(tree.find("Redirect").length).toEqual(0);
    });
  });
});
