import React from "react";
import { Popover, User, Dropdown, Grid } from "@nextui-org/react";
type MenuItemsType = {
	key: string;
	name: string;
};
const UserSettings = () => {
	const menuItems: MenuItemsType[] = [
		{
			key: "add",
			name: "Add User",
		},
		{
			key: "remove",
			name: "Remove User",
		},
		{
			key: "info",
			name: "Info",
		},
	];

	return (
		<>
			<Dropdown>
				<Dropdown.Button flat>Settings</Dropdown.Button>
				<Dropdown.Menu
					aria-label="Dynamic Actions"
				>
					{menuItems.map((item) => (
						<Dropdown.Item
							key={item.key}
							color={item.key === "remove" ? "error" : "default"}
						>
							{item.name}
						</Dropdown.Item>
					))}
				</Dropdown.Menu>
			</Dropdown>
		</>
	);
};

export default UserSettings;
