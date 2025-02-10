const AppPage = () => ({
	Metadata: {
		title: "L'application mobile",
		description: "Découvrez Animalert, l'application mobile pensée pour soutenir la protection et la recherche des animaux perdus ou blessés. Recevez des alertes en temps réel, personnalisez vos notifications, et agissez tout en respectant la planète. Disponible bientôt sur iOS et Android. 🌍📱",
		keywords: "Animalert, application protection animale, retrouver animal perdu, alerte animal blessé, widget animal perdu, application mobile animaux, neutre en carbone, notifications animaux, sauver animaux, iOS Android",
		shareImages: [
			{
				path: "images/metas/app/fr animalert app beta og graph and twitter card banner.png",
				alt: "Bannière promotionnelle de l'application Animalert, mettant en avant une interface de carte pour localiser des animaux perdus à proximité. Slogan : 'L'appli Animalert n'attend que vous'. Appel à l'action : 'Téléchargez Animalert ;)', avec des captures d'écran de l'application affichant des notifications et des informations sur des animaux disparus."
			}
		]
	},
	Header: {
		logoTitle: "logo d'Animalert",
		logoAlt: "icône de l'application mobile Animalert",
		startTitle: "L'application qui ",
		heavyText: "sauve ",
		endText: "vos animaux",
		bonusText: "rendez-vous en 2025",
		soon: "Bientôt !",
		appStoreAlt: "icône de l'apple store avec lien pour télécharger l'application",
		playStoreAlt: "icône du google play store avec lien pour télécharger l'application"
	},
	Features: {
		cardPlacesTitles: [
			"Alertes en temps réel\nà côté de Maison 🏡",
			"Alertes en temps réel\nà côté de Travail 💼",
			"Alertes en temps réel\nà côté de 42 💻",
			"Alertes en temps réel\nà côté de Sciences Po 🎓", // une école prestigieuse du pays en question
		],
		placesDescription: "Vous pouvez ajouter des alertes là où ça compte pour vous, pour être toujours au courant, même en déplacement.",
		favoritePlacesScreenAlt: "Exemple de lieu favori",
		cardNotifTitle: "Soyez toujours au courant",
		cardNotifDescription: "Une notification dès qu'un animal est déclaré perdu ou blessé !",
		notificationExampleAlt: "Notification example",
		cardAlertTitle: "Les alertes autour de vous en direct",
		cardAlertDescription: "Lors de vos trajets, l'application s'occupe de regarder si des animaux ont été déclarés perdus autour de vous et vous préviens !",
		cardWidgetTitle: "Un widget pour ne rien manquer",
		cardWidgetDescription: "A chaque déverrouillage de votre téléphone un coup d'œil sur les animaux perdus aux alentours !",
		widgetScreenAlt: "Démonstration du widget",
		cardSizeTitle: "Seulement",
		cardSizeLittleText: "c'est environ 15 photos",
		cardLogoAlt: "Icône de l'application",
		cardCompatTitles: [
			"Disponible sur iOS",
			"Disponible sur Android"
		],
		cardCompatDescription: "Alors, vous attendez quoi pour la télécharger ?!",
		appleStoreAlt: "icone de l'apple store",
		googlePlayStoreAlt: "icone du google play store",
		appStoreScreenAlt: "Disponible sur l'apple store",
		googleplayStoreScreenAlt: "Disponoible sur le google play store",
		cardTeamTitle: "Dévelopée par des",
		cardTeamStudents: "étudiants",
		devPictureAlt: "Photo du developpeur",
		cardCarbonTitle: "Neutre en carbone",
		cardCarboDescriptions: [
			"Animalert respecte\nvotre vie privée.",
			"Animalert respecte\nla planète.",
			"Animalert respecte\nvotre batterie.",
			"Animalert respecte\nson éthique.",
		],
		planetCenter: "🌍",
		awardedTitle: "déjà primée.",
		cardFilterTitle: "Ne recevez que l'essentiel",
		cardFilterDescription: "Personnalisez les notifications que vous voulez recevoir, ou non.",
		notifSettingsScreenAlt: "Notifications personnalisables dans l'application"
	}
});

export default AppPage;
