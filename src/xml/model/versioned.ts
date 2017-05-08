/** This object can be versioned, thus only appearing for some Nif versions */
export interface Versioned {
	/** If set, the object is only valid for the given version */
	match_version?: string;
	/** If set, the object is only valid for versions after or including the given version */
	minimum_version?: string;
	/** If set, the object is only valid for versions before or including the given version */
	maximum_version?: string;
	/** If set, this object is only valid if the conditional expression evaluates to true */
	version_conditional_expression?: string;
	/** If set, the object is only valid for the given user version */
	match_user_version?: string;
	/** If set, the object is only valid for user version before or including the given user version */
	maximum_user_version?: string;
}
