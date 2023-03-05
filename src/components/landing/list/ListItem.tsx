import React from "react";
interface ItemPropsI {
	name: string
}
const ListItem = ({name}: ItemPropsI) => {
	return (
		<div>
			<span>{name}</span>
		</div>
	);
};

export default ListItem;
