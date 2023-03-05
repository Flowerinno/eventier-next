import React from "react";
import ListItem from "./ListItem";
import styles from "./ListItem.module.scss";
interface ListPropsI {
	list: {
		name: string;
		state: string;
	}[];
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
								<ListItem name={item.name} />
							</li>
						</ul>
					);
				})}
		</div>
	);
};

export default List;
