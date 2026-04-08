// const entities = [
// 	{
// 		name: 'Evil Jim',
// 		location: 'The Ninth Circle of Hell',
// 		faction: 'The Voidspawn',
// 		description: 'Big n mean and bad.'
// 	},
// 	{
// 		name: 'Goomba',
// 		location: 'Mushroom Kingdom',
// 		faction: 'Minions of Bowser',
// 		description: 'round with lil feet. bouncy'
// 	},
// 	{
// 		name: 'Goomba2',
// 		location: 'Mushroom Kingdom2',
// 		faction: 'Minions of Bowser2',
// 		description: 'round with lil feet. bouncy2'
// 	}
// ];

interface thing {
	name: string;
	location: string;
	faction: string;
	description: string;
}

type category = string;
type ID = number;

interface entity {
	ID: ID;
	category: category;
	relatedTo: ID[];
	name: string;
	description: string;
}

const entities: thing[] = [];

for (let i = 0; i < 5; i++) {
	entities.push({
		name: `Evil Jim${i}`,
		location: 'The Ninth Circle of Hell',
		faction: 'The Voidspawn',
		description: 'Big n mean and bad.'
	});
	entities.push({
		name: `Goomba${i}`,
		location: 'Mushroom Kingdom',
		faction: 'Minions of Bowser',
		description: 'round with lil feet. bouncy'
	});
}

const officialEntities: entity[] = [
	{
		ID: 0,
		category: 'City',
		relatedTo: [1],
		name: 'Hive City Karilex',
		description: 'A doomed hive-city, one of few stranded on a heretical world.'
	},
	{
		ID: 1,
		category: 'Gang',
		relatedTo: [0],
		name: 'The Rust Coats',
		description: 'Disgraced ex-military gang, known for their vicious shows of force.'
	},
	{
		ID: 2,
		category: 'Gang Member',
		relatedTo: [1, 3],
		name: 'Gangster 1',
		description: 'He is very violent, and not to be trifled with'
	},
	{
		ID: 3,
		category: 'Gang Member',
		relatedTo: [1, 2],
		name: 'Gangster 2',
		description: 'Known for thinking of clever plans that rely on brains over brawn.'
	}
];

export { entities, officialEntities };
