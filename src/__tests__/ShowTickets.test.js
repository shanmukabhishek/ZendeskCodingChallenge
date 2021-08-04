import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ShowTickets from "../ShowTickets.jsx";

describe("tests ShowTickets", () => {
  let tree;
  beforeAll(() => {
    // window.fetch = jest.fn(() =>
    // Promise.resolve({
    //   json: () => Promise.resolve({ tickets: [s{id:1,assignee_id:'1234'}] }),
    // }));
    // global.fetch = jest.fn().mockReturnValue( Promise.resolve({
    //     json: () => Promise.resolve({ tickets: [{id:1,assignee_id:'1234'}] })
    //   }));
    Enzyme.configure({ adapter: new Adapter() });
    tree = shallow(<ShowTickets></ShowTickets>);
  });
  describe("tests componentDidMount", () => {
    // it("tests when tickets api service is successful", () => {
    //   Storage.prototype.getItem = jest.fn(() => "MOCK_TOKEN");
    //   tree.instance().componentDidMount();
    //   expect(tree.state().tickets).toBe([{id:1,assignee_id:'1234'}]);
    // });
    // it("tests when isAuthorized is false and url includes access_token", () => {
    //   Storage.prototype.getItem = jest.fn(() => false);
    //   Location.prototype.toString = jest.fn(() => "access_token");
    //   tree.instance().componentDidMount();
    //   expect(tree.state().redirectToTickets).toBeTruthy();
    // });
    // it("tests when isAuthorized is false and url does not include access_token", () => {
    //   Storage.prototype.getItem = jest.fn(() => false);
    //   Location.prototype.toString = jest.fn(() => "error");
    //   tree.instance().componentDidMount();
    //   expect(tree.state().redirectToTickets).toBeTruthy();
    // });
  });
  describe("render", () => {
    it("renders Tickets when authToken is present", () => {
      Storage.prototype.getItem = jest.fn(() => "MOCK_TOKEN");
      tree.setState({ authToken: true });
      expect(tree.find("h1").text()).toEqual("Zendesk Ticket Viewer");
    });
    it("does not render Tickets when authToken is not present", () => {
      tree.setState({ authToken: undefined });
      expect(tree.find("h1").length).toEqual(0);
    });
  });
  describe("handleTicketOnClick", () => {
    it("tests when same ticket is clicked again", () => {
      tree.setState({ curTicketDetails: { id: 3 } });
      tree.instance().handleTicketOnClick({ id: 3 });
      expect(tree.state().showIndividualTicketInd).toBeFalsy();
      expect(tree.state().curTicketDetails).toEqual({});
    });
    it("tests when new ticket is clicked", () => {
      tree.setState({ curTicketDetails: { id: 3 } });
      tree.instance().handleTicketOnClick({ id: 1 });
      expect(tree.state().showIndividualTicketInd).toBeTruthy();
      expect(tree.state().curTicketDetails).toEqual({ id: 1 });
    });
  });
});
