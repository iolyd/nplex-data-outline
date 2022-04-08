export interface ProjectsDatum {
	title: string;
	description?: string;
	enum?: string[];
	required?: boolean;
	multiple?: boolean;
}

export const placeData: ProjectsDatum[] = [
	{
		title: 'Type de propriétaire',
		required: true,
		description: 'Quel entité est propriétaire du lieu.',
		enum: ['Particulier', 'Entreprise', 'Municipal']
	},
	{
		title: "Catégorie d'usage principal",
		required: true,
		enum: ['Résidentiel', 'Communautaire', 'Commercial', 'Industriel']
	},
	{
		title: 'Usage principal',
		required: true,
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
		title: "Catégorie(s) d'usage(s) complémentaire(s)",
		multiple: true,
		enum: ['Résidentiel', 'Communautaire', 'Commercial', 'Industriel']
	},
	{
		title: 'Usage(s) complémentaire(s)',
		multiple: true,
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
		title: 'Rues adjacentes',
		description: 'Nombre de rues qui bordent le terrain'
	},
	{
		title: 'Arrondissement',
		required: true,
		enum: ['...']
	},
	{
		title: 'Zone',
		description: "Code de la zone spécifique tel qu'inscrit au zonage."
	},
	{
		title: 'Emplacement',
		description:
			"Localisation géographique (ambiguë?) du site du projet. Pour assurer l'anonymat des lieux, la localisation pourra être définie à l'aide d'un cercle de précision laissée à la discrétion de l'éditeur de la fiche."
	},
	{
		title: 'Aire du terrain',
		description: 'Surface du lot ou du site en m2.'
	},
	{
		title: 'Secteurs & règlements particuliers',
		multiple: true,
		enum: [
			"Plan d'implantation et d'intégration architecturale",
			"Secteur d'intérêt patrimonial",
			'...'
		]
	}
];

export const buildingData: ProjectsDatum[] = [
	{
		title: 'Année de construction'
	},
	{
		title: "Mode d'implantation",
		enum: ['Isolé', 'Jumelé', 'Contigu'],
		required: true
	},
	{
		title: 'Murs partagés',
		description: 'Nombre de 1 à 4.'
	},
	{
		title: 'Norme patrimoniale',
		enum: ['A', 'AA', 'B', 'F']
	},
	{
		title: 'Marges',
		description: 'Marges latérales, avant, et arrière en mètre.'
	},
	{
		title: 'Façade',
		description: 'Largeur de façade en mètre.'
	},
	{
		title: 'Aire du bâtiment',
		required: true,
		description: 'Surface en m2, avant les travaux et après les travaux si changée.'
	},
	{
		title: 'Hauteur de bâtiment',
		required: true,
		description:
			'Hauteur du bâtiment touché par les travaux, en mètre, avant les travaux et après si changée.'
	},
	{
		title: "Nombre d'étages",
		required: true,
		description: 'Avant les travaux, et après si changé.'
	},
	{
		title: 'Type de construction',
		required: true,
		enum: ['Combustible', 'Incombustible']
	}
];

export const projectData: ProjectsDatum[] = [
	{
		title: 'Type de projet',
		enum: ['Nouvelle construction', 'Transformation']
	},
	{
		title: 'Travaux',
		enum: [
			'Construction neuve',
			'Agrandissement en hauteur de bâtiment',
			'Agrandissement en aire de bâtiment',
			"Changement d'usage",
			'Fusion de logements',
			'Rénovation de planchers',
			'Rénovation de revêtement extérieur',
			'Aménagement de cours arrière',
			'Rénovation de terrain arrière',
			'Changement de portes et/ou fenêtres',
			'Création de mazzanine',
			'Excavation de sous-sol',
			'...'
		],
		multiple: true
	},
	{
		title: 'Coûts approximatifs',
		description:
			"Fourchette de prix personalisable où l'éditeur peut définir un prix spécifique, ou un minimum et un maximum (contraint par un écart max.).",
		required: true
	},
	{
		title: 'Étages touchés par les travaux',
		description: 'Choix multiple.',
		enum: ['R-d-c', '2', '3', '4', '5', '...']
	},
	{
		title: 'Matériaux',
		multiple: true,
		description: ''
	},
	{
		title: 'Événements / Phases / Jalons',
		multiple: true,
		description:
			"Série d'éléments qui constituent le récit du projet. Les éléments peuvent être imbriqués: des phases peuvent contenir  des sous-événements ou des jalons."
	},
	{
		title: "Indicateurs d'exemplarité",
		description: '',
		multiple: true,
		enum: ['Conservation du patrimoine bâti', 'Conservation du patrimoine naturel', '']
	}
];
