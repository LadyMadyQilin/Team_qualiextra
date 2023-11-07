import * as models from "../../models/index.js";

const packageProviderController = {
    addPackage: async function (req, res) {
        //je récupére le formulaire
        const {
          price,
          quantity,
          date_start,
          date_end,
          available,
          hour_start,
          hour_end,
          join_catg,
          capacity,
        } = req.body;
        try {
          const pkg = await models.Package.create({
            price,
            quantity,
            date_start,
            date_end,
            available,
            hour_start,
            hour_end,
            join_catg,
            capacity,
          });
          res.status(201).send("package has been created");
        } catch (error) {
          res.status(401).json({ message: error.message });
        }
      },
    
      getAllPackages: async function (req, res) {
        try {
          const packages = await models.Package.findAll();
          res.json(packages);
        } catch (error) {
          res.status(500).json({ errorMessage: error.message });
        }
      },
    
      getOnePackage: async function (req, res) {
        try {
          const pkg = await models.Package.findOne();
          res.json(pkg);
        } catch (error) {
          res.status(500).json({ errorMessage: error.message });
        }
      },
    
      getOnePrice: async function (req, res) {
        try {
          const packageId = req.params.id;
          const pkg = await models.Package.findById(packageId);
    
          if (!pkg) {
            return res.status(404).json({ message: "Package not found" });
          }
    
          res.json({ price: pkg.price });
        } catch (error) {
          res.status(500).json({ errorMessage: error.message });
        }
      },
    
      updatePackage: async function (req, res) {
        const { packageId } = req.params;
        const {
          price,
          quantity,
          date_start,
          date_end,
          available,
          hour_start,
          hour_end,
          join_catg,
          capacity,
        } = req.body;
        try {
          const pkg = await models.Package.findByPk(packageId);
    
          if (!pkg) {
            return res.status(404).json({ message: "package non trouvé" });
          }
    
          pkg.price = price;
          pkg.quantity = quantity;
          pkg.date_start = date_start;
          pkg.date_end = date_end;
          pkg.available = available;
          pkg.hour_start = hour_start;
          pkg.hour_end = hour_end;
          pkg.join_catg = join_catg;
          pkg.capacity = capacity;
    
          // Enregistrez les modifications dans la base de données
          await pkg.save();
          res.status(201).send("package has been modified");
    
          // Répondez avec le service mis à jour
          return res.status(200).json({ pkg });
        } catch (error) {
          res.status(401).json({ message: error.message });
        }
      },
    
      deletePackage: async function (req, res) {
        const { packageId } = req.params; // Obtenez l'ID du client à partir des paramètres d'URL
    
        try {
          // Recherchez le client dans la base de données
          const pkg = await models.Package.findByPk(packageId);
    
          if (!pkg) {
            return res.status(404).json({ message: "Package non trouvé" });
          }
    
          // supprimer dans la base de données
          //!methode destroy et pas delete
          await pkg.destroy();
    
          // Répondez avec le client est supprimé
          return res.status(200).json({ message: "Package is delete" });
        } catch (error) {
          return res.status(500).json({ errorMessage: error.message });
        }
      },
}

export default packageProviderController;