export type category = string;
export type ID = number;

export interface entity {
	ID: ID;
	category: category;
	relatedTo: ID[];
	name: string;
	description: string;
}
