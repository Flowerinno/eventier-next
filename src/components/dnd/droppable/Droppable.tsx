import React from "react";
import { useDroppable } from "@dnd-kit/core";
import styles from "../../landing/Landing.module.scss";

type DroppableProps = {
	children: JSX.Element;
	currentState: string;
};

const Droppable: React.FC<DroppableProps> = ({ children, currentState }) => {
	let style: any = null;
	currentState === "todo" && (style = styles.left_landing);
	currentState === "inProcess" && (style = styles.center_landing);
	currentState === "done" && (style = styles.right_landing);

	const { setNodeRef } = useDroppable({
		id: currentState,
	});

	return (
		<div ref={setNodeRef} className={style}>
			{children}
		</div>
	);
};

export default Droppable;
