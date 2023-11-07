import * as models from "../../models/index.js";

const serviceProviderController = {
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
          res.status(201).send("service has been created");
        } catch (error) {
          res.status(401).json({ message: error.message });
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
            return res.status(404).json({ message: "Service non trouvé" });
          }
    
          service.name = name;
          service.description = description;
    
          // Enregistrez les modifications dans la base de données
          await service.save();
          res.status(201).send("service has been modified");
    
          // Répondez avec le service mis à jour
          return res.status(200).json({ service });
        } catch (error) {
          res.status(401).json({ message: error.message });
        }
      },
    
      deleteService: async (req, res) => {
        const { serviceId } = req.params; // Obtenez l'ID du client à partir des paramètres d'URL
    
        try {
          // Recherchez le client dans la base de données
          const service = await models.Service.findByPk(serviceId);
    
          if (!service) {
            return res.status(404).json({ message: "Service non trouvé" });
          }
    
          // supprimer dans la base de données
          //!methode destroy et pas delete
          await service.destroy();
    
          // Répondez avec le client est supprimé
          return res.status(200).json({ message: "Service is delete" });
        } catch (error) {
          return res.status(500).json({ errorMessage: error.message });
        }
      },
};

export default serviceProviderController;