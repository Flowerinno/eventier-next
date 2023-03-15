import React from "react";
import styles from "./List.module.scss";
import ListItem from "./ListItem";


interface ListPropsI {
	list: {
		name: string;
		state: string;
		id: number;
	}[],
	currentState: string;
}

const List = ({ list, currentState }: ListPropsI) => {
	return (
		<div>
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
