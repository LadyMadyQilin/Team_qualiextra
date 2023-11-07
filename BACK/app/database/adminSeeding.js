import  User  from '../models/User.js';
import bcrypt from 'bcrypt';
import roleGuard from '../middlewares/roleGuard.js';

const seedUsers = async () => {
    try {
        const existingAdmin = await User.findOne({ where: roleGuard({ roles: ['admin'] }) });

        if (existingAdmin) {
            console.log('Admin user already exists. Skipping seeding.');
            return;
        }

        const passwordHash = await bcrypt.hash('Jesuisadmin78!', 10);

        await User.create({
            role: 'admin',
            firstname: 'Jack',
            lastname: 'Sparrow',
            password: passwordHash,
            email: 'admin@blackpearl.com',
            phone_user: '1234567890', // Make sure to match the field name in the model
        });

        console.log('Admin user seeded successfully.');
    } catch (error) {
        console.error('Error seeding users:', error);
    }
};

seedUsers();