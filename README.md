# Qualiextra

Groupe : Benjamin, Andréa, Sarah et Déborah

## La présentation du projet

Quali-extra est une plateforme numérique innovante visant à révolutionner l'expérience hôtelière et gastronomique pour les utilisateurs et les fournisseurs de services. En mettant l'accent sur la mise en relation transparente et l'expérience unique, elle vise à combler le fossé entre la demande d'expériences personnalisées et l'offre d'établissements hôteliers et de restaurants de qualité.

## La définition des besoins et objectifs du projet

- Besoins : (problème auxquels répond le projet) => créer lien entre client et prestataire en local
- Objectifs : (solutions qu’apporte le projet) => mise en relation entre prestataires et clients.

## MVP

### Fonctionnalités clès

- Mise en relation des clients avec les offres d’hôteliers/restaurateurs: Filtrage des expériences par les clients

- Réservation de nuitées et/ou d’expériences par les clients

- Proposition de nuitées et/ou d’expériences par les prestataires.

- Conception de l’interface utilisateur (UI) : Interface pour les clients pour visualiser les établissements

- Développement : Développer les fonctionnalités clés en premier Assurer que l’application est responsive et peut être utilisée sur différents appareils.

- Générer des mails dynamique/automatique selon l’utilisation (mail de confirmation d’inscription ou mail réservation) / Sécurité mail / changement de mot de passe

- Les évolutions potentielles : (ce qui ne sera pas terminé) : tout ce qui est prévu mais ne fait pas partie du MVP : Mode de paiement : grille tarifaire / Yield-management (augmentation des prix en fonction de la demande)

- Connexion rapide via d’autres services / auto-complétions (boîte mail et autres)

- Carte/map dynamique avec les points d’intérêt (hôtels et restaurant) / FILTRES (ville / prestation / avis (étoiles) / prix / catégorie (festive, tendance, classique etc.) / type de réservation (résa en ligne, tel et indifférent) / accessibilité (handi))

## La liste des technologies utilisées pour le projet (spécifications techniques)

- REACT / JavaScript Front-end (Sarah / Benjamin)
- NodeJS (expressJS) / JavaScript Back-end (Déborah / Benjamin)
- POSTGRESQL : demande d’ajout de l’accessibilité au restaurant et à l’hôtel via le formulaire d’inscription, découper l’adresse en plusieurs items (villes insérer dans une BDD remplie par Prestataire afin de l’utiliser dynamiquement et remplir la BDD) (Déborah / Andréa)
- CSS/SASS (Sarah / Benjamin)
- HTML (JSX) (Andréa / Sarah / Benjamin / Déborah)
- Accessibilité (Déborah)
- API : Google map (GMaps / <https://leafletjs.com/>), hôtel/restaurant (<https://developers.google.com/hotels?hl=fr>)

## La définition de la cible du projet (le public visé) : ça permettra entre autres choses d'anticiper certaines contraintes visuelles/ergonomiques/techniques

- Clients (accessibilité pour tous types de handicap.)

1. Voyageurs Aventureux : Ces ndividus recherchent des expériences uniques lors de leurs voyages. Ils ne veulent pas seulement une chambre d'hôtel ou un repas au restaurant ; ils veulent quelque chose qui les surprenne, qui leur offre une nouvelle perspective ou qui les challenge d'une manière ou d'une autre. Ils pourraient être particulièrement attirés par les "menus à l'aveugle" ou les séjours dans des hôtels qui offrent des expériences spéciales.

2. Couples : Que ce soit pour une escapade romantique, un anniversaire ou une autre occasion spéciale, de nombreux couples recherchent des expériences qui leur permettront de passer du temps de qualité ensemble. Un forfait comprenant une nuit d'hôtel avec un spa ou une expérience gastronomique pourrait être très attrayant pour eux.

3. Professionnels du Voyage : Cela pourrait inclure des personnes en déplacement professionnel cherchant à ajouter une touche spéciale à leur séjour ou des organisateurs d'événements qui cherchent des expériences uniques pour des clients ou des participants à des conférences.

4. Locaux Curieux : Même ceux qui vivent à proximité peuvent être intéressés par une "escapade" locale ou par l'exploration de la gastronomie de leur propre ville d'une manière nouvelle et surprenante.

5. Célébrations Spéciales : Les personnes qui cherchent à célébrer des occasions spéciales comme des anniversaires, des anniversaires de mariage, des enterrements de vie de jeune fille/garçon pourraient être attirées par les offres uniques de "Qualiextra".

6. Foodies et Passionnés de Gastronomie : Ceux qui sont toujours à la recherche de nouvelles expériences culinaires et qui aiment être surpris par des choix de menu innovants.

7. Amateurs de Bien-être : Des individus qui cherchent une évasion relaxante comprenant des expériences de spa, de méditation ou de bien-être en général.

8. Touristes de Luxe : Ceux qui recherchent des expériences haut de gamme et sont prêts à payer un prix premium pour des services et des expériences exclusifs.

- Prestataires de l’hôtellerie et de la restauration

## L'arborescence de l'application (le chemin utiltr/presta/admin)

- Homepage G
  - Bloc « Client »
    - 1ere connexion : Inscription
      - Créer un compte
        - Répondre au questionnaire / Filtrer les suggestions
          - Résultats/réponse du questionnaire
            - Espace client
    - 2eme connexion : Utilisateur
      - Se connecter
        - Bloc « Espace client »
          - Homepage Client (personnaliser la page d’accueil en fonction des critères (fonctionnalité))
            - Mes Résa
            - Notification
            - Liste de Favoris (services favoris)  
            - Page profil (Compte client) – (Gérer la modification des infos clients)
          - Filtre overlay (page ou modal)
  - Bloc « Réservation »
    - Pages de recherche
    - Panier
    - Page de confirmation
  - Bloc « Prestataire »
    - Homepage Presta
      - Création de compte ?
        - Ajouter un Établissement
          - Ajouter un/des Service(s)
            - Ajouter un/des Forfait(s)
        - Liste des commandes
      - Liste des services
  - Bloc « Admin »
    - Log Admin
      - Homepage Admin
        - Dashboard gestion :
          - Validation des comptes prestataires ?
          - Liste des comptes Prestataires
          - Liste des comptes Clients
          - Listes de commandes (traçabilité entre les clients et les prestataires).

[arborescence en image](/img/Arborescence_Projet_Tuture.png)

## La liste des routes

### front prévues

- / -
- /auth -
- /404 -
- /search -
- /package/:id -
  - /my-account (user) -
    - /dashboard x
      - /my-wishlist -
      - /my-reservation -
    - /final-reservation -
    - /confirmation-reservation -
  - /provider
    - /calendar -
      - /my-properties -
      - /add-property -
      - /add-package -
      - /add-service -
  - /my-adminAccount -
    - /dashboard ~
      - /add-provider -
      - /clients-orders -
      - /clients-list -
      - /list-provider -
<!-- - /contact
- /referencing
- /help-customer
- /legal-notice
- /terms-conditions
- /privacy-policy
- /feedback -->
<!-- - /search/shoppingBag/logging -->
<!-- - /search/ shoppingBag/signIn -->

### Routes Back:/ (méthode ( get, post, put, delete) sur la même route  pour varier les actions)

``` js
// récupérer de toutes les catégories
categoriesRouter.get('/categories', packageProviderController.getCategories);

// récupérer une catégorie
categoriesRouter.get('/categories/:id',);

// créer une catégorie
categoriesRouter.post('/categories', jwtGuard, roleGuard({ roles: ['admin'] }), adminController.addCategory);

// modifier une catégorie
categoriesRouter.put('/categories/:id', jwtGuard, roleGuard({ roles: ['admin'] }), adminController.updateCategory);

// supprimer une catégorie
categoriesRouter.delete('/categories/:id', jwtGuard, roleGuard({ roles: ['admin'] }), adminController.deleteCategory);```

```js
/récupérer tous les établissements , jwtGuard, roleGuard({ role: ['admin', 'provider'] })
institutionRouter.get('/institution', institutionProviderController.getAllInstitutions)

//récupérer un établissement 
institutionRouter.get('/institution/:id', jwtGuard, roleGuard({ roles: ['admin', 'provider'] }), institutionProviderController.getOneInstitution)

//récupérer un service selon id de l'institution
institutionRouter.get('/institutions/:id/services', jwtGuard, roleGuard({ roles: ['admin', 'provider'] }), serviceProviderController.getAllServicesByInstitutionId);


//ajouter un établissement
institutionRouter.post('/institution', jwtGuard, roleGuard({ roles: ['provider'] }), institutionProviderController.addInstitution)

//modifier un établissement 
institutionRouter.put('/institution/:id', jwtGuard, roleGuard({ roles: ['admin', 'provider'] }), institutionProviderController.updateInstitution)

//supprimer un établissement
institutionRouter.delete('/institution/:id', jwtGuard, roleGuard({ roles: ['admin', 'provider'] }), institutionProviderController.deleteInstitution)
```
```js
//route de création des users
loginRouter.post('/register', authController.register)
//route de création des provider(uniquement créer par l'admin)

//a rajouter une fois les tests finis :  
loginRouter.post('/register-provider', jwtGuard, roleGuard({ roles: ['admin'] }), adminController.registerProvider)

//route pour la connexion
loginRouter.post('/login', authController.login);

// 
loginRouter.get('/validation-email/:token', authController.validationEmail);


//route pour le profil
loginRouter.get('/profile', jwtGuard, userController.profile);

```

```js
//récupérer les meilleurs packages pour affichage page Home
packagesRouter.get('/packages/:id/favorites', packageProviderController.bestPackageHome);

//récupérer tous les packages
packagesRouter.get('/packages', packageProviderController.getAllPackages);

//récupérer un package selon son id   
packagesRouter.get('/package/:id', jwtGuard, roleGuard({ roles: ['admin', 'provider', 'user'] }), packageProviderController.getOnePackage);

//récupérer l'identifant d'un package pour avoir avoir son prix
packagesRouter.get('/packages/:id/prices', jwtGuard, roleGuard({ roles: ['provider'] }), packageProviderController.getOnePrice);

//création packages
packagesRouter.post('/packages', jwtGuard, roleGuard({ roles: ['admin', 'provider'] }), packageProviderController.addPackage);

//ajout de service dans package
// jwtGuard, roleGuard({ roles: ['admin', 'provider'] }),
packagesRouter.post('/package/service', packageProviderController.addServiceToPackage)

//gestion de la quantité du stock et disponibilité
packagesRouter.put('/purchases/packages/:id', availableController.availabilityManagement);

//modification du forfait 
packagesRouter.put('/packages/:id', jwtGuard, roleGuard({ roles: ['admin', 'provider'] }), packageProviderController.updatePackage);

//supprimer forfait 
packagesRouter.delete('/packages/:id', jwtGuard, roleGuard({ roles: ['admin', 'provider'] }), packageProviderController.deletePackage);
```

```js
// route de recherche
searchRouter.get('/search', userController.search);
```
```js
//récupérer tous les services
servicesRouter.get('/services', jwtGuard, roleGuard({ roles: ['admin', 'provider'] }), serviceProviderController.getAllServices);

// récupérer un service
servicesRouter.get('/services/:id', jwtGuard, roleGuard({ roles: ['admin', 'provider'] }), serviceProviderController.getOneService);

// créer un service
servicesRouter.post('/services', jwtGuard, roleGuard({ roles: ['provider'] }), serviceProviderController.addService);

// 'modifier un service'
servicesRouter.put('/services/:id', jwtGuard, roleGuard({ roles: ['provider'] }), serviceProviderController.updateService);

// 'supprimer un service'
servicesRouter.delete('/services/:id', jwtGuard, roleGuard({ roles: ['admin', 'provider'] }), serviceProviderController.deleteService);
```

```js
//permet d'aller récupérer tous les users 
usersRouter.get('/users', adminController.getAll)
//permet d'aller récupérer tous les users role provider
usersRouter.get('/users_provider', jwtGuard, roleGuard({ roles: ['admin'] }), adminController.getAllProvider)

//récupérer un utilisateur selon son identifiant 
usersRouter.get('/users/:id', jwtGuard, roleGuard({ roles: ['admin', 'provider'] }), adminController.getOneUser);

//récupérer un utilisateur provider selon son identifiant 
usersRouter.get('/users_provider/:id', jwtGuard, roleGuard({ roles: ['admin'] }), adminController.getOneProvider);

//récupérer un service selon son identifiant par le provider
usersRouter.get('/users_provider/:id/services/:id', jwtGuard, roleGuard({ roles: ['provider'] }), serviceProviderController.getOneServiceByProviderId );

//récupérer toutes institutions selon id utilisateur
usersRouter.get('/users_provider/:id/institutions', jwtGuard, roleGuard({ roles: ['provider'] }), institutionProviderController.getAllInstitutionByProviderId);

// récuperer les pkgs d'un service un institutions d'un prestataire
usersRouter.get('/users_provider/:id/institutions/:id/service/:id/packages', jwtGuard, roleGuard({ roles: ['provider'] }));

// récuperer les services d'une institutions d'un prestataire
usersRouter.get('/users_provider/:id/institutions/:id/services', jwtGuard, roleGuard({ roles: ['provider'] }), serviceProviderController.getAllServicesByInstitutionId);

//récupérer une commande selon id utilisateur
usersRouter.get('/users/:id/purchases', jwtGuard, roleGuard({ roles: ['admin, provider'] }), userController.getAllPurchasesByUserId)

//modifier le profil utilisateur 
usersRouter.put('/users/:id', jwtGuard, roleGuard({ roles: ['admin'] }), adminController.updateUser);

//supprimer le profil utilisateur   
usersRouter.delete('/users/:userId', jwtGuard, roleGuard({ roles: ['admin'] }), adminController.deleteUser);
```

```js
// récupérer toute la liste des favoris 
wishlistRouter.get('/wishlist', jwtGuard, roleGuard({ roles: ['user'] }));

// recupérer une liste favorie
wishlistRouter.get('/wishlist/:id', jwtGuard, roleGuard({ roles: ['user'] }));

// créer un favoris
wishlistRouter.post('/wishlist', jwtGuard, roleGuard({ roles: ['user'] }));

// supprimer un favoris
wishlistRouter.delete('/wishlist/:id', jwtGuard, roleGuard({ roles: ['user'] }));
```

## Histoire de route (books)

```
/** 
* @swagger
* components:
*   schemas:
*     User:
*       type: object
*       required:
*         - role
*         - firstname
*         - lastname
*         - email
*         - adress_user
*         - city_user
*         - cp_user
*         - phone_user
*         -  createdAt
*       properties:
*         id:
*           type: integer
*           description: The auto-generated id of user
*         role:
*           type: string
*           description: role user
*         firstname:
*           type: string
*           description: firstname of user
*         lastname:
*           type: string
*           description: lastname of user
*         email:
*           type: string
*           description: email adress of user
*         adress_user:
*           type: string
*           description: adress of user
*         city_user:
*           type: string
*           description: city of user
*         cp_user:
*           type: string
*           description: code postal user
*         phone_user:
*           type: string
*           description: phone user
*         createdAt:
*           type: string
*           format: date
*           description: The date the book was added
*       example:
*         id: 59
*         role: user
*         firstname: Aria
*         lastname: stark
*         email: a.stark@gmail.com
*         adress_user: rue de la demeure noir et blanche
*         city_user: Braavos
*         cp_user: 10000
*         phone_user: 0625897845
*         createdAt: 2023-11-05 13:16:48.515+01
*/
/**
* @swagger
* tags:
*   name: Users
*   description: The users managing API
* /users:
*   post:
*     summary: Create a new user
*     tags: [Users]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/User'
*     responses:
*       200:
*         description: The created user.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/User'
*       500:
*         description: Some server error
*
*/

/**
* @swagger
* tags:
*   name: Users
*   description: The users managing API
* /users:
*   get:
*     summary: Lists all the users
*     tags: [Users]
*     responses:
*       200:
*         description: The list of the users
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*   post:
*     summary: Create a new user
*     tags: [Users]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/User'
*     responses:
*       200:
*         description: The created user.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/User'
*       500:
*         description: Some server error
* /users/{id}:
*   get:
*     summary: Get the user by id
*     tags: [Users]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The user id
*     responses:
*       200:
*         description: The user response by id
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/User'
*       404:
*         description: The user was not found
*   put:
*    summary: Update the user by the id
*    tags: [Users]
*    parameters:
*      - in: path
*        name: id
*        schema:
*        required: true
*        description: The user id
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            $ref: '#/components/schemas/User'
*    responses:
*      200:
*        description: The user was updated
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/User'
*      404:
*        description: The user was not found
*      500:
*        description: Some error happened
*   delete:
*     summary: Remove the user by id
*     tags: [Users]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The user id
*
*     responses:
*       200:
*         description: The user was deleted
*       404:
*         description: The user was not found
*/


/**
* @swagger
* components:
*   schemas:
*     Provider:
*       type: object
*       required:
*         - role
*         - firstname
*         - lastname
*         - email
*         - adress_user
*         - city_user
*         - cp_user
*         - phone_user
*         -  createdAt
*       properties:
*         id:
*           type: float
*           description: The auto-generated id of provider
*         role:
*           type: string
*           description: role provider
*         firstname:
*           type: string
*           description: firstname of provider
*         lastname:
*           type: string
*           description: lastname of provider
*         email:
*           type: string
*           description: email adress of provider
*         adress_provider:
*           type: string
*           description: adress of provider
*         city_provider:
*           type: string
*           description: city of provider
*         cp_provider:
*           type: string
*           description: code postal provider
*         phone_provider:
*           type: string
*           description: phone provider
*         createdAt:
*           type: string
*           format: date
*           description: The date the provider was added
*       example:
*         id: 60
*         role: provider
*         firstname: John
*         lastname: snow
*         email: j.snowexamplefr
*         adress_user: route du nord
*         city_user: Winterfell
*         cp_user: 00000
*         phone_user: 0123547698
*         createdAt: 2023-11-05 13:16:48.515+01
*/

/**
* @swagger
* tags:
*   name: Providers
*   description: The providers managing API
* /users_provider:
*   post:
*     summary: Create a new provider
*     tags: [Providers]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Provider'
*     responses:
*       200:
*         description: The created provider.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Provider'
*       500:
*         description: Some server error
*
*/

/**
* @swagger
* tags:
*   name: Providers
*   description: The providers managing API
* /users_provider:
*   get:
*     summary: Lists all the providers
*     tags: [Providers]
*     responses:
*       200:
*         description: The list of the providers
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Provider'
*   post:
*     summary: Create a new provider
*     tags: [Providers]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Provider'
*     responses:
*       200:
*         description: The created provider.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Provider'
*       500:
*         description: Some server error
* /users_provider/{id}/services/{id}:
*   get:
*     summary: Get the provider by id
*     tags: [Providers,Services]
*     parameters:
*       - in: path
*         name: user_providerId
*         schema:
*         required: true
*         description: The provider id
*       - in: path
*         name: serviceId
*         schema:
*         required: true
*         description: The service id
*     responses:
*       200:
*         description: The service response by id
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Service'
*       404:
*         description: The service was not found
* /users_provider/{id}/institutions:
*   get:
*     summary: Get the provider by id
*     tags: [Providers,Institutions]
*     parameters:
*       - in: path
*         name: user_providerId
*         schema:
*         required: true
*         description: The provider id
*     responses:
*       200:
*         description: The insitutions response
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Institution'
*       404:
*         description: The institution was not found
* /users_provider/{id}/institutions/{id}/services:
*   get:
*     summary: Get the services by id
*     tags: [Providers,Institutions,Services]
*     parameters:
*       - in: path
*         name: user_providerId
*         schema:
*         required: true
*         description: The provider id
*       - in: path
*         name: institutionId
*         schema:
*         required: true
*         description: The institution id
*     responses:
*       200:
*         description: The services response
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Service'
*       404:
*         description: The service was not found
* /users_provider/{id}:
*   get:
*     summary: Get the provider by id
*     tags: [Providers]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The provider id
*     responses:
*       200:
*         description: The provider response by id
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Provider'
*       404:
*         description: The provider was not found
*   put:
*    summary: Update the provider by the id
*    tags: [Providers]
*    parameters:
*      - in: path
*        name: id
*        schema:
*        required: true
*        description: The provider id
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            $ref: '#/components/schemas/Provider'
*    responses:
*      200:
*        description: The provider was updated
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Provider'
*      404:
*        description: The provider was not found
*      500:
*        description: Some error happened
*   delete:
*     summary: Remove the provider by id
*     tags: [Providers]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The provider id
*
*     responses:
*       200:
*         description: The provider was deleted
*       404:
*         description: The provider was not found
*/

/**
* @swagger
* components:
*   schemas:
*     Institution:
*       type: object
*       required:
*         - name_ins
*         - cover
*         - email_ins
*         - adress_ins
*         - city_ins
*         - cp_ins
*         - phone_ins
*         - openning
*         - experiences
*         - paverage_price
*         - user_id
*       properties:
*         id:
*           type: integer
*           description: The auto-generated id of institution
*         name_ins:
*           type: string
*           description: name institution
*         cover:
*           type: string
*           description: cover institution
*         email_ins:
*           type: string
*           description: email institution
*         adress_ins:
*           type: string
*           description: adress institution
*         city_ins:
*           type: string
*           description: city institution
*         cp_ins:
*           type: string
*           description: code postal institution
*         phone_ins:
*           type: string
*           description: phone institution
*         opening:
*           type: string
*           description: hour opening of institution
*         experiences:
*           type: string
*           description: description services
*         average_price:
*            type: integer
*            description: average price
*         user_id:
*            type: integer
*       example:
*         id: 44
*         name_ins:  Le Bistro Parisien
*         cover: https://drive.google.com/uc?export=view&id=1bCYBKU88r2DsKQXj5DqOpcBupkgpM6iC
*         email_ins: lebistroparisien@fic
*         adress_ins: 12 Rue de la Paix
*         city_ins: paris
*         cp_ins: 75002
*         phone_ins: 33
*         openning:
*         experiences: Degustation de vins, cours de cuisine francaise
*         paverage_price: 50
*         user_id: 57
*/

/**
* @swagger
* tags:
*   name: Institutions
*   description: The institutions managing API
* /institution:
*   post:
*     summary: Create a new institution
*     tags: [Institutions]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Institution'
*     responses:
*       200:
*         description: The created institution.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Institution'
*       500:
*         description: Some server error
*
*/

/**
* @swagger
* tags:
*   name: Institutions
*   description: The institutions managing API
* /institutions:
*   get:
*     summary: Lists all the institutions
*     tags: [Institutions]
*     responses:
*       200:
*         description: The list of the institutions
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Institution'
*   post:
*     summary: Create a new institution
*     tags: [Institutions]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Institution'
*     responses:
*       200:
*         description: The created institution.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Institution'
*       500:
*         description: Some server error
* /institutions/{id}/services:
*   get:
*     summary: Get the institution by id
*     tags: [Institutions]
*     parameters:
*       - in: path
*         name: institutionId
*         schema:
*         required: true
*         description: The institution id
*     responses:
*       200:
*         description: The services response
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Service'
*       404:
*         description: The institution was not found
* /institutions/{id}:
*   get:
*     summary: Get the institution by id
*     tags: [Institutions]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The institution id
*     responses:
*       200:
*         description: The institution response by id
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Institution'
*       404:
*         description: The institution was not found
*   put:
*    summary: Update the institution by the id
*    tags: [Institutions]
*    parameters:
*      - in: path
*        name: id
*        schema:
*        required: true
*        description: The institution id
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            $ref: '#/components/schemas/Institution'
*    responses:
*      200:
*        description: The institution was updated
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Institution'
*      404:
*        description: The institution was not found
*      500:
*        description: Some error happened
*   delete:
*     summary: Remove the institution by id
*     tags: [Institutions]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The institution id
*
*     responses:
*       200:
*         description: The institution was deleted
*       404:
*         description: The institution was not found
*/

/**
* @swagger
* components:
*   schemas:
*     Service:
*       type: object
*       required:
*         - name_serv
*         - cover_serv
*         - description_serv
*         - hour_start
*         - hour_end
*         - institution_id
*       properties:
*         id:
*           type: integer
*           description: The auto-generated id of service
*         name_serv:
*           type: string
*           description: name service
*         cover_serv:
*           type: string
*           description: cover of service
*         description_serv:
*           type: string
*           description: descrpition service
*         hour_start:
*           type: string
*           description: start time of stay
*         hour_end:
*           type: string
*           description: end of stay time
*         institution_id:
*           type: string
*           description: identifier of the institutions linked to the service
*       example:
*         id: 106
*         name_serv:  Degustation de vins
*         cover_serv: https://drive.google.com/uc?export=view&id=1mdFwPDeLQZw9xPEPwib5f31PeU5KTkWk
*         description_serv: Le bistro parisien vous invite Ó dÚcouvrir les richesses du terroir francais...
*         hour_start: 15:00
*         hour_end: 19:00
*         institution_id: 44

*/

/**
* @swagger
* tags:
*   name: Services
*   description: The services managing API
* /service:
*   post:
*     summary: Create a new service
*     tags: [Services]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Service'
*     responses:
*       200:
*         description: The created service.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Service'
*       500:
*         description: Some server error
*
*/

/**
* @swagger
* tags:
*   name: Services
*   description: The services managing API
* /services:
*   get:
*     summary: Lists all the services
*     tags: [Services]
*     responses:
*       200:
*         description: The list of the services
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Service'
*   post:
*     summary: Create a new service
*     tags: [Services]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Service'
*     responses:
*       200:
*         description: The created service.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Service'
*       500:
*         description: Some server error
* /services/{id}:
*   get:
*     summary: Get the service by id
*     tags: [Services]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The service id
*     responses:
*       200:
*         description: The service response by id
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Service'
*       404:
*         description: The service was not found
*   put:
*    summary: Update the service by the id
*    tags: [Services]
*    parameters:
*      - in: path
*        name: id
*        schema:
*        required: true
*        description: The service id
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            $ref: '#/components/schemas/Service'
*    responses:
*      200:
*        description: The service was updated
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Service'
*      404:
*        description: The service was not found
*      500:
*        description: Some error happened
*   delete:
*     summary: Remove the service by id
*     tags: [Services]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The service id
*
*     responses:
*       200:
*         description: The service was deleted
*       404:
*         description: The service was not found
*/

/**
* @swagger
* components:
*   schemas:
*     Package:
*       type: object
*       required:
*         - name_pkg
*         - price
*         - quantity
*         - date_start
*         - date_end
*         - available
*         - capacity
*       properties:
*         id:
*           type: integer
*           description: The auto-generated id of package
*         name_pkg:
*           type: string
*           description: name of package
*         price:
*           type: integer
*           description: price of package
*         quantity:
*           type: string
*           description: lquantity of package available
*         date_start:
*           type: string
*           description: start date of stay
*         date_end:
*           type: string
*           description: end date of stay
*         capacity:
*           type: integer
*           description: capacity of people for the package
*       example:
*         id: 106
*         name_pkg: La Totale Azur
*         price: 250
*         quantity: 5
*         date_start: 2023-11-01
*         date_end: 2023-11-05
*         available: t
*         capacity: 2
*/

/**
* @swagger
* tags:
*   name: Packages
*   description: The packages managing API
* /package:
*   post:
*     summary: Create a new package
*     tags: [Packages]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Package'
*     responses:
*       200:
*         description: The created package.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Package'
*       500:
*         description: Some server error
*
*/
// 
/**
* @swagger
* tags:
*   name: Packages
*   description: The packages managing API
* /packages:
*   get:
*     summary: Lists all the packages
*     tags: [Packages]
*     responses:
*       200:
*         description: The list of the packages
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Package'
*   post:
*     summary: Create a new package
*     tags: [Packages]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Package'
*     responses:
*       200:
*         description: The created package.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Package'
*       500:
*         description: Some server error
* /packages/{id}/prices:
*   get:
*     summary: Get the package price by id
*     tags: [Packages]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The package id
*     responses:
*       200:
*         description: The prices of package
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Package'
*       404:
*         description: The package was not found
* /packages/{id}:
*   get:
*     summary: Get the package by id
*     tags: [Packages]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The package id
*     responses:
*       200:
*         description: The package response by id
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Package'
*       404:
*         description: The package was not found
*   put:
*    summary: Update the package by the id
*    tags: [Packages]
*    parameters:
*      - in: path
*        name: id
*        schema:
*        required: true
*        description: The package id
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            $ref: '#/components/schemas/Package'
*    responses:
*      200:
*        description: The package was updated
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Package'
*      404:
*        description: The package was not found
*      500:
*        description: Some error happened
*   delete:
*     summary: Remove the package by id
*     tags: [Packages]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The package id
*
*     responses:
*       200:
*         description: The package was deleted
*       404:
*         description: The package was not found
*/

/**
* @swagger
* components:
*   schemas:
*     Purchase:
*       type: object
*       required:
*         - quantity
*         - price
*         - date_start
*         - date_end
*         - hour_start
*         - hour_end
*       properties:
*         id:
*           type: integer
*           description: The auto-generated id of purchase
*         quantity:
*           type: string
*           description: quantity of purchase
*         price:
*           type: integer
*           description: price of purchase
*         date_start:
*           type: string
*           format: date
*           description: start date of stay
*         date_end:
*           type: string
*           format: date
*           description: end date of stay
*         hour_start:
*           type: string
*           description: start time of stay
*         hour_end:
*           type: string
*           description: end of stay time
*         createdAt:
*           type: string
*           format: date
*           description: The date the purchase was added
*       example:
*         id: 1
*         quantity: 10
*         price: 150
*         date_start: 2023-11-04
*         date_end: 2023-11-05
*         hour_start:
*         hour_end:
*         user_id: 59
*         createdAt: 2023-11-05 13:16:48.515+01
*/

/**
* @swagger
* tags:
*   name: Purchases
*   description: The purchases managing API
* /purchase:
*   post:
*     summary: Create a new purchase
*     tags: [Purchases]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Purchase'
*     responses:
*       200:
*         description: The created purchase.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Purchase'
*       500:
*         description: Some server error
*
*/

/**
* @swagger
* tags:
*   name: Purchases
*   description: The purchases managing API
* /purchases:
*   get:
*     summary: Lists all the purchases
*     tags: [Purchases]
*     responses:
*       200:
*         description: The list of the purchases
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Purchase'
*   post:
*     summary: Create a new purchase
*     tags: [Purchases]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Purchase'
*     responses:
*       200:
*         description: The created purchase.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Purchase'
*       500:
*         description: Some server error
* /purchases/{id}:
*   get:
*     summary: Get the purchase by id
*     tags: [Purchases]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The purchase id
*     responses:
*       200:
*         description: The purchase response by id
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Purchase'
*       404:
*         description: The purchase was not found
*   put:
*    summary: Update the purchase by the id
*    tags: [Purchases]
*    parameters:
*      - in: path
*        name: id
*        schema:
*        required: true
*        description: The purchase id
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            $ref: '#/components/schemas/Purchase'
*    responses:
*      200:
*        description: The purchase was updated
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Purchase'
*      404:
*        description: The purchase was not found
*      500:
*        description: Some error happened
*   delete:
*     summary: Remove the purchase by id
*     tags: [Purchases]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The purchase id
*
*     responses:
*       200:
*         description: The purchase was deleted
*       404:
*         description: The purchase was not found
*/

/**
* @swagger
* components:
*   schemas:
*     Category:
*       type: object
*       required:
*         - name_catg
*       properties:
*         id:
*           type: integer
*           description: The auto-generated id of category
*         name_catg:
*           type: string
*           description: name of category
*       example:
*         id: 1
*         name_catg: restauration
*/

/**
* @swagger
* tags:
*   name: Categories
*   description: The categories managing API
* /category:
*   post:
*     summary: Create a new category
*     tags: [Categories]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Category'
*     responses:
*       200:
*         description: The created category.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Category'
*       500:
*         description: Some server error
*
*/

/**
* @swagger
* tags:
*   name: Categories
*   description: The categories managing API
* /categories:
*   get:
*     summary: Lists all the categories
*     tags: [Categories]
*     responses:
*       200:
*         description: The list of the categories
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Category'
*   post:
*     summary: Create a new category
*     tags: [Categories]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Category'
*     responses:
*       200:
*         description: The created category.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Category'
*       500:
*         description: Some server error
* /categories/{id}:
*   get:
*     summary: Get the category by id
*     tags: [Categories]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The category id
*     responses:
*       200:
*         description: The category response by id
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Category'
*       404:
*         description: The category was not found
*   put:
*    summary: Update the category by the id
*    tags: [Categories]
*    parameters:
*      - in: path
*        name: id
*        schema:
*        required: true
*        description: The category id
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            $ref: '#/components/schemas/Category'
*    responses:
*      200:
*        description: The category was updated
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Category'
*      404:
*        description: The purchase was not found
*      500:
*        description: Some error happened
*   delete:
*     summary: Remove the category by id
*     tags: [Categories]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The category id
*
*     responses:
*       200:
*         description: The category was deleted
*       404:
*         description: The category was not found
*/

/**
* @swagger
* components:
*   schemas:
*     Style:
*       type: object
*       required:
*         - name_style
*       properties:
*         id:
*           type: integer
*           description: The auto-generated id of category
*         name_style:
*           type: string
*           description: name of style
*       example:
*         id: 1
*         name_catg: ephemere
*/

/**
* @swagger
* tags:
*   name: Styles
*   description: The styles managing API
* /style:
*   post:
*     summary: Create a new style
*     tags: [Styles]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Style'
*     responses:
*       200:
*         description: The created style.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Style'
*       500:
*         description: Some server error
*
*/

/**
* @swagger
* tags:
*   name: Styles
*   description: The styles managing API
* /styles:
*   get:
*     summary: Lists all the styles
*     tags: [Styles]
*     responses:
*       200:
*         description: The list of the styles
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Style'
*   post:
*     summary: Create a new style
*     tags: [Styles]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Style'
*     responses:
*       200:
*         description: The created style.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Style'
*       500:
*         description: Some server error
* /styles/{id}:
*   get:
*     summary: Get the style by id
*     tags: [Styles]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The style id
*     responses:
*       200:
*         description: The style response by id
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Style'
*       404:
*         description: The style was not found
*   put:
*    summary: Update the style by the id
*    tags: [Styles]
*    parameters:
*      - in: path
*        name: id
*        schema:
*        required: true
*        description: The style id
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            $ref: '#/components/schemas/Style'
*    responses:
*      200:
*        description: The style was updated
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Style'
*      404:
*        description: The style was not found
*      500:
*        description: Some error happened
*   delete:
*     summary: Remove the style by id
*     tags: [Styles]
*     parameters:
*       - in: path
*         name: id
*         schema:
*         required: true
*         description: The style id
*
*     responses:
*       200:
*         description: The style was deleted
*       404:
*         description: The style was not found
*/
```