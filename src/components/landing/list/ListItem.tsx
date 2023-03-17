"use client";
import React, { useRef, useState } from "react";
import styles from "./ListItem.module.scss";
import { useDraggable } from "@dnd-kit/core";
import { Text, Popover, Button, Tooltip } from "@nextui-org/react";
import { useDimensions } from "../../../hooks/useDimensions";

interface ItemPropsI {
	name: string;
	id: number;
	currentState: string;
	disabled: boolean;
}
type DropdownVariants = "error" | "warning" | "success";

const ListItem = ({ name, id, currentState, disabled }: ItemPropsI) => {
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
				<Popover.Content>
					{" "}
					<Text css={{ p: "$10" }}>This is the content of the popover.</Text>
				</Popover.Content>
			</Popover>
		</div>
	);
};

export default ListItem;
