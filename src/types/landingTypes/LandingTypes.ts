export interface ListI {
	name: string;
	state: string;
	id: number;
	disabled: boolean;
	currentState?: string;
	activeMembers: number[] | [];
}
