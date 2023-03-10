import React, { useRef } from "react";
import { useDraggable } from "@dnd-kit/core";
import styles from "./ListItem.module.scss";


interface ItemPropsI {
	name: string;
	id: number;
	currentState: string;
}

const ListItem = ({ name, id, currentState }: ItemPropsI) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: id,
	});
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined;
		
	
	return (
		<div
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
			className={styles.listItem}
		>
			<span>{name}</span>
		</div>
	);
};

export default ListItem;
