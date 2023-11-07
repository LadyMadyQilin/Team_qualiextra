import * as models from '../../models/index.js';

const institutionProviderController = {
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
        user_id,
      });
      res.status(201).send("institution has been created");
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },

  getAllInstitutions: async function (req, res) {
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
        res.status(401).json("pas le droit");
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

  getOneInstitution: async function (req, res) {
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
        return res.status(404).json({ message: "institution non trouvé" });
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
      res.status(201).send("institution has been modified");

      // Répondez avec le service mis à jour
      return res.status(200).json({ ins });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },

  deleteInstitution: async function (req, res) {
    const { institutionId } = req.params; // Obtenez l'ID du client à partir des paramètres d'URL

    try {
      // Recherchez le client dans la base de données
      const ins = await models.Institution.findByPk(institutionId);

      if (!ins) {
        return res.status(404).json({ message: "Institution non trouvé" });
      }

      // supprimer dans la base de données
      //!methode destroy et pas delete
      await ins.destroy();

      // Répondez avec le client est supprimé
      return res.status(200).json({ message: "Institution is delete" });
    } catch (error) {
      return res.status(500).json({ errorMessage: error.message });
    }
  },
};


export default institutionProviderController;
