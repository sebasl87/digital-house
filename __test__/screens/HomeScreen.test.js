import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { HomeScreen } from "../../src/screens";
import { cleanup } from "react-native-testing-library";

const mock_movements = [
  {
    createdAt: "2022-12-09T06:34:25.607Z",
    product: "Handmade Metal Shoes",
    points: 16434,
    image: "https://loremflickr.com/640/480/transport",
    is_redemption: false,
    id: "1",
  },
  {
    createdAt: "2022-12-09T17:02:51.904Z",
    product: "Recycled Plastic Tuna",
    points: 92984,
    image: "https://loremflickr.com/640/480/technics",
    is_redemption: true,
    id: "2",
  },
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Fantastic Granite Bacon",
    points: 42416,
    image: "https://loremflickr.com/640/480/technics",
    is_redemption: false,
    id: "3",
  },
  {
    createdAt: "2022-12-09T00:30:23.966Z",
    product: "Fantastic Fresh Gloves",
    points: 23913,
    image: "https://loremflickr.com/640/480/city",
    is_redemption: true,
    id: "4",
  },
];

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    movements: mock_movements,
    points: 100000,
    styles: { titleWelcomme: {} },
  }),
}));

describe("HomeScreen screen", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("should render successfully with mock params IOS", () => {
    jest.mock("react-native/Libraries/Utilities/Platform", () => ({
      OS: "ios",
    }));
    const homeScreenIOS = renderer.create(<HomeScreen />).toJSON();
    expect(homeScreenIOS).toMatchSnapshot();
    cleanup();
  });

  it("should render successfully with mock params Android", () => {
    jest.mock("react-native/Libraries/Utilities/Platform", () => ({
      OS: "android",
    }));
    const homeScreenAndroid = renderer.create(<HomeScreen />).toJSON();
    expect(homeScreenAndroid).toMatchSnapshot();
  });
});
