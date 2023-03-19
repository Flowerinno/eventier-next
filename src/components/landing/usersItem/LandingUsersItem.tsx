import React from "react";
import { Popover, User, Dropdown, Grid } from "@nextui-org/react";
import { UserI } from "../users/LandingUsersTypes";
import UserSettings from "./userSettings/UserSettings";
export const LandingUsersItem = ({
	user: { firstName, lastName, position, avatar, status, userId },
}: UserI) => {
	return (
		<Popover>
			<Popover.Trigger>
				<User
					as="button"
					src={avatar}
					name={`${firstName} ${lastName} - ${status ? "Online" : "Offline"}`}
					description={position}
				></User>
			</Popover.Trigger>
			<Popover.Content css={{overflow: 'hidden'}}>
				<Grid.Container gap={1} justify="center" direction="column">
					<Grid>
						<UserSettings />
					</Grid>
				</Grid.Container>
			</Popover.Content>
		</Popover>
	);
};
