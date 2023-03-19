import React, { useState } from "react";
import styles from "./LandingUsers.module.scss";
import { Button, Grid, Popover, Text, User } from "@nextui-org/react";
import { LandingUsersItem } from "../usersItem/LandingUsersItem";
import { landingUsers as users } from "../data";

export const LandingUsers = ({
	activeMembers,
}: {
	activeMembers: number[];
}) => {
	const filterUsers = (id: number, activeMembers: number[]): boolean => {
		return activeMembers.includes(id);
	};
	return (
		<>
			<Grid.Container gap={1} justify="center" direction="column">
				{users
					.filter((user) => filterUsers(user.userId, activeMembers))
					.map((user) => {
						if (!user) {
							return (
								<Grid>
									<Popover>
										<Popover.Trigger>
											<User
												as="button"
												name="Add new user"
												src="http://cdn.onlinewebfonts.com/svg/img_211806.png"
											/>
										</Popover.Trigger>
										<Popover.Content>
											<Text>No active users</Text>
										</Popover.Content>
									</Popover>
								</Grid>
							);
						}
						return (
							<Grid key={user.userId}>
								<LandingUsersItem user={user} />
							</Grid>
						);
					})}
			</Grid.Container>
		</>
	);
};
