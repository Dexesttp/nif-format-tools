/** Represents a choice in an Enumeration or a Bitfield */
export interface Option {
	/** The choice name */
	name: string;
	/** The value representing the in memory */
	value: number;
	/** Description of the choice */
	description: string;
}
