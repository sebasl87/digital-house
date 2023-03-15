import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { ProductDetail } from "../../src/screens";
import { render, fireEvent } from "react-native-testing-library";

const mockHistoryGoBack = jest.fn();

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    goBack: mockHistoryGoBack,
  }),
  useRoute: () => ({
    params: {
      date: "2022-12-09T06:34:25.607Z",
      product: "Handmade Metal Shoes",
      points: 16434,
      image: "https://loremflickr.com/640/480/transport",
      isRedemption: false,
    },
  }),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    styles: { containerImg: {}, button: {}, monthBlueBox: {} },
  }),
}));

describe("ProductDetail screen", () => {
  it("should render successfully with mock params", () => {
    const productDetail = renderer.create(<ProductDetail />).toJSON();
    expect(productDetail).toMatchSnapshot();
  });

  it("should be redirect on press", () => {
    const { getByTestId } = render(<ProductDetail />);
    fireEvent.press(getByTestId("touchableGoBackTolist"));

    expect(mockHistoryGoBack).toHaveBeenCalled();
  });
});
