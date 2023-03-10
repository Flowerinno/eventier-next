import React, { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import styles from "./List.module.scss";
import ListItem from "./ListItem";
import { Droppable } from "react-beautiful-dnd";

interface ListPropsI {
	currentState: string;
}

interface Item {
	name: string;
	state: string;
	id: number;
}

const List = ({ currentState }: ListPropsI) => {
	const [list, setList] = useState([
		{ name: "Read a book", state: "todo", id: 1 },
		{ name: "Write a letter", state: "inProcess", id: 2 },
		{ name: "Write an essay", state: "done", id: 3 },
	]);
	const { isOver, setNodeRef } = useDroppable({
		id: currentState,
	});

	return (
		<div ref={setNodeRef}>
			{list
				.filter((item) => {
					return item.state === currentState;
				})
				.map((item, index) => {
					return (
						<ul key={index}>
							<li className={styles.listItem}>
								<ListItem
									name={item.name}
									id={item.id}
									currentState={currentState}
								/>
							</li>
						</ul>
					);
				})}
		</div>
	);
};

export default List;
