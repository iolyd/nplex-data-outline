interface ProjectsDatum {
	title: string;
	description?: string;
	enum?: string[];
}

export const placeData: ProjectsDatum[] = [
	{
		title: 'Type de propriétaire',
		description: '',
		enum: ['Particulier', 'Entreprise', 'Public']
	},
	{
		title: 'Usage',
		description: '',
		enum: ['Résidentiel', 'Communautaire', 'Commercial']
	},
	{
		title: 'Typologie/vocation de lieu',
		description: '',
		enum: [
			'Unifamiliale',
			'Duplex',
			'Triplex',
			'Quadruplex',
			'Quintuplex',
			'Sixplex',
			"Bloc d'appartements",
			'Co-propriété divise (condos)',
			'Habitations communautaires',
			'Habitations personnes âgées',
			'Parc',
			'Friche / terrain vacant',
			'Place publique',
			'Stationnement',
			'Rue ou trottoir',
			'Ruelle',
			'Restaurant / café / bar',
			'Commerce de détail',
			'Commerce de gros',
			'Bureau',
			'Bibliothèque',
			'École',
			'Établissement événementiel'
		]
	},
	{
		title: 'Groupement de bâtiment',
		enum: ['Isolé', 'Jumelé', 'Contigu']
	},
	{
		title: 'Zonage',
		enum: []
	},
	{
		title: 'Arrondissement',
		enum: ['']
	},
	{
		title: 'Emplacement',
		description: 'Localisation géographique (ambiguë?) du site du projet.'
	},
	{
		title: 'Surface du site'
	}
];

export const projectData: ProjectsDatum[] = [
	{
		title: 'Type de projet',
		enum: ['Nouvelle construction', 'Transformation']
	},
	{
		title: 'Sous-type de projet',
		enum: ['Agrandissement en hauteur de bâtiment', 'Agrandissement en aire de bâtiment', '...']
	},
	{
		title: ''
	}
];
