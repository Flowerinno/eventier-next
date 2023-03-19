import "@testing-library/jest-dom/extend-expect";
import { getByTestId, render, screen } from "@testing-library/react";
import ListItem from "../../src/components/landing/list/ListItem";

describe("ListItem component", () => {
	const mockProps = {
		name: "Test Item",
		id: 1,
		currentState: "todo",
		disabled: false,
		activeMembers: [],
	};

	it("should render the name of the item passed as prop", () => {
		const { getByText } = render(<ListItem {...mockProps} />);
		expect(getByText(mockProps.name)).toBeInTheDocument();
	});

	it("should render the correct background color based on the current state of the item", () => {
		const { getByText } = render(<ListItem {...mockProps} />);
		const button = getByText(mockProps.name);
		expect(button).toHaveStyle(`background-color: #ff4d4f`);
		// "error" color should be shown as currentState prop is "todo"
	});

	it("should render the Popover when the button is clicked", () => {
		const { getByText } = render(<ListItem {...mockProps} />);
		const button = getByText(mockProps.name);
		button.click();
		expect(
			screen.getByText("This is the content of the popover.")
		).toBeInTheDocument();
	});

	it("should not render the Popover when the disabled prop is true", () => {
		const { getByText } = render(<ListItem {...mockProps} disabled={true} />);
		const button = getByText(mockProps.name);
		button.click();
		expect(screen.getByText("This is the content of the popover.")).toBeNull();
	});
});
