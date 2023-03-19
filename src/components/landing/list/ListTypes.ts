export interface ItemPropsI {
	name: string;
	id: number;
	state?: string;
	currentState?: string;
	disabled: boolean;
	activeMembers: number[] | [];
}

export type DropdownVariants = "error" | "warning" | "success";

export interface ListPropsI {
	list: ItemPropsI[];
	currentState: string;
	disableHandler: (id: number) => void;
}
