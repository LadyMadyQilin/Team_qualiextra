import * as models from "../models/index.js";

const providerController = {
  addInstitution: async function (req, res) {
    //je récupére le formulaire
    const {
      name_ins,
      cover,
      email_ins,
      adress_ins,
      city_ins,
      cp_ins,
      phone_ins,
      average_price,
      experiences,
    } = req.body;
    const user_id = req.user.id;

    try {
      const ins = await models.Institution.create({
        name_ins,
        cover,
        email_ins: email_ins.toLowerCase(),
        adress_ins,
        city_ins,
        cp_ins,
        phone_ins: parseInt(phone_ins),
        average_price,
        experiences,
        user_id
      });
      res.status(201).send("The institution is created.");
    } catch (error) {
      res.status(401).json({ errorMessage: error.message });
    }
  },

  getAllInstititions: async function (req, res) {
    try {
      const ins = await models.Institution.findAll();
      res.json(ins);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  getAllInstitutionByProviderId: async function (req, res) {
    try {
      const userId = req.user.id;
      if (!userId) {
        res.status(401).json("The user is not found");
      }
      const institutions = await models.Institution.findAll({
        where: {
          user_id: userId,
        },
        include: {
          as: "user",
          model: models.User,
        },
      });

      res.json(institutions);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  getOneInstitutionByIdProvider: async function (req, res) {
    try {
      const userId = req.user.id;

      if (userId) {
        const institutions = await models.Institution.findOne(institutionId, {
          where: {
            user_id: userId,
          },
          include: [
            {
              model: User,
              as: "user",
            },
          ],
        });
      }
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  getOneInstitition: async function (req, res) {
    try {
      const ins = await models.Institution.findOne();
      res.json(ins);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  updateInstitution: async function (req, res) {
    const { institutionId } = req.params;
    const {
      name_ins,
      cover,
      email_ins,
      adress_ins,
      city_ins,
      cp_ins,
      phone_ins,
      average_price,
      experiences,
    } = req.body;
    try {
      const ins = await models.Institution.findByPk(institutionId);

      if (!ins) {
        return res.status(404).json({ message: "The institution is not found." });
      }

      ins.name_ins = name_ins;
      ins.cover = cover;
      ins.email_ins = email_ins;
      ins.adress_ins = adress_ins;
      ins.city_ins = city_ins;
      ins.cp_ins = cp_ins;
      ins.phone_ins = phone_ins;
      ins.average_price = average_price;
      ins.experiences = experiences;

      // Enregistrez les modifications dans la base de données
      await ins.save();
      return res.status(200).json({ message: "The institution is modified." });

      // Répondez avec le service mis à jour
      return res.status(200).json({ ins });
    } catch (error) {
      res.status(401).json({ errorMessage: error.message });
    }
  },

  deleteInstitution: async function (req, res) {
    const { institutionId } = req.params; // Obtenez l'ID du client à partir des paramètres d'URL

    try {
      // Recherchez le client dans la base de données
      const ins = await models.Institution.findByPk(institutionId);

      if (!ins) {
        return res.status(404).json({ message: "The institution is not found." });
      }

      // supprimer dans la base de données
      //!methode destroy et pas delete
      await ins.destroy();

      // Répondez avec le client est supprimé
      return res.status(200).json({ message: "The institution is deleted." });
    } catch (error) {
      return res.status(500).json({ errorMessage: error.message });
    }
  },

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
      res.status(201).send("The package is created.");
    } catch (error) {
      res.status(401).json({ errorMessage: error.message });
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
        return res.status(404).json({ message: "The package is not found." });
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
        return res.status(404).json({ message: "The package is not found." });
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
      res.status(201).send("The package is modified.");

      // Répondez avec le service mis à jour
      return res.status(200).json({ pkg });
    } catch (error) {
      res.status(401).json({ errorMessage: error.message });
    }
  },

  deletePackage: async function (req, res) {
    const { packageId } = req.params; // Obtenez l'ID du client à partir des paramètres d'URL

    try {
      // Recherchez le client dans la base de données
      const pkg = await models.Package.findByPk(packageId);

      if (!pkg) {
        return res.status(404).json({ message: "The package is not found." });
      }

      // supprimer dans la base de données
      //!methode destroy et pas delete
      await pkg.destroy();

      // Répondez avec le client est supprimé
      return res.status(200).json({ message: "The package is deleted." });
    } catch (error) {
      return res.status(500).json({ errorMessage: error.message });
    }
  },

  addService: async function (req, res) {
    //je récupére le formulaire
    const { name_serv, description_serv, institutionId } = req.body;
    // const institution_id = req.institution.id;
    try {
      const service = await models.Service.create({
        name_serv,
        description_serv,
        institutionId,
        institution_id: institutionId,
      });
      res.status(201).send("The service is created.");
    } catch (error) {
      res.status(401).json({ errorMessage: error.message });
    }
  },

  getAllServices: async (req, res) => {
    try {
      const services = await models.Service.findAll();
      res.json(services);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  getAllServicesByInstitutionId: async function (req, res) {
    try {
      const institutionId = req.institution.id;
      if (!institutionId) {
        res.status(401).json("pas le droit");
      }
      const services = await models.Service.findAll({
        where: {
          institution_id: institutionId,
        },
        include: {
          as: "institution",
          model: models.Institution,
        },
      });

      res.json(institutionId);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  getOneService: async function (req, res) {
    try {
      const service = await models.Service.findOne();
      res.json(service);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  updateService: async function (req, res) {
    //je récupére le formulaire
    const { serviceId } = req.params;
    const { name, description } = req.body;
    try {
      const service = await models.Service.findByPk(serviceId);

      if (!service) {
        return res.status(404).json({ message: "The service is not found." });
      }

      service.name = name;
      service.description = description;

      // Enregistrez les modifications dans la base de données
      await service.save();
      res.status(201).send("The service is modified.");

      // Répondez avec le service mis à jour
      return res.status(200).json({ service });
    } catch (error) {
      res.status(401).json({ errorMessage: error.message });
    }
  },

  deleteService: async (req, res) => {
    const { serviceId } = req.params; // Obtenez l'ID du client à partir des paramètres d'URL

    try {
      // Recherchez le client dans la base de données
      const service = await models.Service.findByPk(serviceId);

      if (!service) {
        return res.status(404).json({ message: "The service is not found." });
      }

      // supprimer dans la base de données
      //!methode destroy et pas delete
      await service.destroy();

      // Répondez avec le client est supprimé
      return res.status(200).json({ message: "The service is deleted." });
    } catch (error) {
      return res.status(500).json({ errorMessage: error.message });
    }
  },
};

export default providerController;
