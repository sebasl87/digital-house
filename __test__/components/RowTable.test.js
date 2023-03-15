import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { RowTable } from "../../src/components";
import { render, fireEvent } from "react-native-testing-library";

const mock_movement = {
  createdAt: "2022-12-09T06:34:25.607Z",
  product: "Handmade Metal Shoes",
  points: 16434,
  image: "https://loremflickr.com/640/480/transport",
  is_redemption: false,
  id: "1",
};
const mock_movement_isRedemption = {
  createdAt: "2022-12-09T06:34:25.607Z",
  product: "Handmade Metal Shoes",
  points: 16434,
  image: "https://loremflickr.com/640/480/transport",
  is_redemption: true,
  id: "1",
};
const mockHistoryPush = jest.fn();

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    navigate: mockHistoryPush,
  }),
}));

describe("RowTable component", () => {
  it("should render successfully with mock movements", () => {
    const rowTable = renderer
      .create(<RowTable props={mock_movement} />)
      .toJSON();
    expect(rowTable).toMatchSnapshot();
  });

  it("should render successfully with mock movement and isRedemption", () => {
    const rowTable = renderer
      .create(<RowTable props={mock_movement_isRedemption} />)
      .toJSON();
    expect(rowTable).toMatchSnapshot();
  });

  it("should be redirect on press", () => {
    const { getByTestId } = render(<RowTable props={mock_movement} />);
    fireEvent.press(getByTestId("touchableProduct"));

    expect(mockHistoryPush).toHaveBeenCalled();
  });
});
