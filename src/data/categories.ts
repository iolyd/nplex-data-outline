export type CategoryKey = 'projects' | 'organisations' | 'actors';

interface Category {
	title: string;
}

export const categories: Record<CategoryKey, Category> = {
	projects: {
		title: 'Projets'
	},
	organisations: {
		title: 'Organisations'
	},
	actors: {
		title: 'Acteurs clés'
	}
}