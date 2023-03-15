import React, { useRef, useState } from "react";
import styles from "./ListItem.module.scss";
import { useDraggable } from "@dnd-kit/core";
import { Dropdown } from "@nextui-org/react";

interface ItemPropsI {
	name: string;
	id: number;
	currentState: string;
}
type DropdownVariants = "error" | "warning" | "success";

const ListItem = ({ name, id, currentState }: ItemPropsI) => {
	const input = useRef(null);
	let currentColor: DropdownVariants = "success";
	currentState === "todo" && (currentColor = "error");
	currentState === "inProcess" && (currentColor = "warning");
	currentState === "done" && (currentColor = "success");
	const [openDetails, setOpenDetails] = useState(false);
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: id,
		data: {
			currentState,
		},
		disabled: name === "",
	});
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined;

	return (
		<div
			className={styles.listItem}
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
		>
			<Dropdown disableTriggerPressedAnimation trigger="longPress">
				<Dropdown.Button flat size="lg" color={currentColor}>
					{name}
				</Dropdown.Button>
				<Dropdown.Menu>
					<Dropdown.Item key={Math.random()}>User</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default ListItem;
