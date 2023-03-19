"use client";
import React, { useRef, useState } from "react";
import styles from "./ListItem.module.scss";
import { useDraggable } from "@dnd-kit/core";
import { Popover, Button } from "@nextui-org/react";
import { ItemPropsI, DropdownVariants } from "./ListTypes";
import { useDimensions } from "../../../hooks/useDimensions";
import { LandingUsers } from "../users/LandingUsers";

const ListItem = ({
	name,
	id,
	currentState,
	disabled,
	activeMembers,
}: ItemPropsI) => {
	const { width, height } = useDimensions();
	let currentColor: DropdownVariants = "success";
	currentState === "todo" && (currentColor = "error");
	currentState === "inProcess" && (currentColor = "warning");
	currentState === "done" && (currentColor = "success");

	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: id,
		data: {
			currentState,
		},
		disabled: !disabled,
	});
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
				cursor: "pointer",
		  }
		: undefined;

	return (
		<div
			className={styles.listItem}
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
			title="Move me!"
		>
			<Popover disableShadow triggerType="dialog" isDismissable>
				<Popover.Trigger>
					<Button
						color={currentColor}
						disabled={disabled}
						animated={false}
						auto
						ghost
						flat
						className={styles.listItem_button}
					>
						{name}
					</Button>
				</Popover.Trigger>
				<Popover.Content css={{ overflow: "hidden" }}>
					<LandingUsers activeMembers={activeMembers} />
				</Popover.Content>
			</Popover>
		</div>
	);
};

export default ListItem;
