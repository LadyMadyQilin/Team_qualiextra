import User from "../models/User.js";


export const userController = {

    profile: async (req, res) => {
        res.json(req.user);
    },

    addPurchase: async function (req, res) {
        const { quantity, price, date_start, date_end, hour_start, hour_end } = req.params.Package;
        try {
            const purchase = await models.Purchase.create({
                quantity,
                price,
                date_start,
                date_end,
                hour_start,
                hour_end
            })
            res.status(201).json(purchase);

        } catch (error) {
            res.status(401).json({ errorMessage: error.message })
        }
    },

    getAllPurchases: async function (req, res) {
        try {
            const ins = await models.Purchase.findAll();
            res.json(ins);
        } catch (error) {
            res.status(500).json({ errorMessage: error.message });
        }
    },
    getAllPuchasesByUserId: async function (req, res) {
        try {
            const userId = req.user.id;
            if (!userId) {
                res.status(401).json({ errorMessage: error.message });
            }
            const purchases = await models.Purchase.findAll({
                where: {
                    user_id: userId,
                },
                include: {
                    as: "user",
                    model: models.User,
                },
            });

            res.json(purchases);
        } catch (error) {
            res.status(500).json({ errorMessage: error.message });
        }
    },

    getOnePurchaseByUserId: async function (req, res) {
        try {
            const userId = req.user.id;

            if (userId) {
                const purchase = await models.Purchase.findOne(purchaseId, {
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
            res.json(purchase);
        } catch (error) {
            res.status(500).json({ errorMessage: error.message });
        }
    },

    getOnePurchase: async function (req, res) {
        try {
            const purchase = await models.Purchase.findOne();
            res.json(purchase);
        } catch (error) {
            res.status(500).json({ errorMessage: error.message });
        }
    },

    updatePurchase: async function (req, res) {
        const { purchaseId } = req.params;
        const {
            price,
            quantity,
            date_start,
            date_end,
            hour_start,
            hour_end,
        } = req.body;
        try {
            const purchase = await models.Purchase.findByPk(purchaseId);

            if (!purchase) {
                return res.status(404).json({ errorMessage: error.message });
            }

            purchase.price = price;
            purchase.quantity = quantity;
            purchase.date_start = date_start;
            purchase.date_end = date_end;
            purchase.hour_start = hour_start;
            purchase.hour_end = hour_end;

            // Enregistrez les modifications dans la base de données
            await pkg.save();
            res.status(201).send({ errorMessage: error.message });

            // Répondez avec le service mis à jour
            return res.status(200).json({ errorMessage: error.message });
        } catch (error) {
            res.status(401).json({ errorMessage: error.message });
        }
    },

    deletePurchase: async function (req, res) {
        const { purchaseId } = req.params; // Obtenez l'ID du client à partir des paramètres d'URL

        try {
            // Recherchez le client dans la base de données
            const purchase = await models.Purchase.findByPk(purchaseId);

            if (!purchase) {
                return res.status(404).json({ errorMessage: error.message });
            }

            // supprimer dans la base de données
            //!methode destroy et pas delete
            await ins.destroy();

            // Répondez avec le client est supprimé
            return res.status(200).json({ errorMessage: error.message });
        } catch (error) {
            return res.status(500).json({ errorMessage: error.message });
        }
    },

}
export default userController;