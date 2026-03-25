import { createUser } from '../models/userModel';
export const saveUser = async (req, res) => {
    const { name } = req.body;
    await createUser(name);
    res.json({message: 'Usuario guardado'});
};