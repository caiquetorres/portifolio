export class JobEntity {
	constructor(
		readonly name: string,
		readonly description: string,
		readonly range: {
			readonly start: Date;
			readonly end: Date | null;
		} | null
	) {}
}
