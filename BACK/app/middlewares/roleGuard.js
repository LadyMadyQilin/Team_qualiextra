// Définir les rôles
const role = ['admin', 'user', 'provider'];

const roleGuard = () => {
    return (req, res, next) => {
        console.log(req.user)
        if (!role.includes(req.user.role)) {
            console.log(req.user.role)
            res.status(403).send('Vous n\'avez pas l\'autorisation');
            return;
        }
        next();
    }
};

export default roleGuard;