export interface UserI {
	user: {
		firstName: string;
		lastName: string;
		avatar: string;
		position: string;
		status?: boolean; 
		userId: number;
	};
}
