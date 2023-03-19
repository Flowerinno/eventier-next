"use client";
import React, { useState } from "react";
import styles from "./List.module.scss";
import { IconContext } from "react-icons";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { Tooltip } from "@nextui-org/react";
import { ListPropsI } from "./ListTypes";
import ListItem from "./ListItem";


const List = ({ list, currentState, disableHandler }: ListPropsI) => {
	return (
		<div className={styles.list_container}>
			<ul className={styles.list_wrapper}>
				{list
					.filter((item) => {
						return item.state === currentState;
					})
					.map((item, index) => {
						return (
							<li className={styles.list_item} key={index}>
								<ListItem
									name={item.name}
									id={item.id}
									currentState={currentState}
									disabled={item.disabled}
									activeMembers={item.activeMembers}
								/>
								<Tooltip
									content={!item.disabled ? "Lock to move" : "Unlock to open"}
								>
									<span onClick={() => disableHandler(item.id)}>
										<IconContext.Provider
											value={{
												size: "1.5em",
												color: !item.disabled ? "green" : "red",
											}}
										>
											{item.disabled === true ? (
												<AiFillLock />
											) : (
												<AiFillUnlock />
											)}
										</IconContext.Provider>
									</span>
								</Tooltip>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default List;
