import { ListI } from "@/types/landingTypes/LandingTypes";

export const ListHandler = (
	list: ListI[],
	idIdentifier: number,
	currentStateId: string
): ListI[] => {
	const newList = list.map((listItem) => {
		if (listItem.id === idIdentifier) {
			return {
				...listItem,
				state: currentStateId,
			};
		}
		return listItem;
	});
	return newList;
};

export const addItemToList = (list: ListI[], id:number): ListI[] => {
    return [...list, {name: '', state: 'todo', id: id + 1}]
}

export const findLatestIdInList = (list: ListI[]) : number => {
    if (list.length === 0) return 0;
    return (list[list.length - 1]).id;
}

export const disableItemInList = (list: ListI[], id: number) : ListI[] => {
	const newList = list.map((listItem) => {
		if (listItem.id === id) {
			return {
				...listItem,
				disabled: !listItem.disabled,
			};
		}
		return listItem;
	});
	return newList;
}