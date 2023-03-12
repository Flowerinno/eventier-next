import React, { useRef } from "react";
import { useDraggable } from "@dnd-kit/core";
import styles from "./ListItem.module.scss";


interface ItemPropsI {
	name: string;
	id: number;
	currentState: string;
}

const ListItem = ({ name, id, currentState }: ItemPropsI) => {
	const input = useRef(null);
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: id,
		data: {
			currentState
		},
		disabled: name === ''
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
			{name && <span>{name}</span>}
			{!name && <input type='text' ref={input} className={styles.item_input}/>}
		</div>
	);
};

export default ListItem;
