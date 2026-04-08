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

export { entities };
