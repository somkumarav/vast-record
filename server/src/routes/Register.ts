import Express from 'express';
import { User } from '../entity/User';
import argon from 'argon2';
import { sendEmail } from '../utils/sendMail';
import { createUrl } from '../utils/createUrl';

export const register = Express.Router();

register.post('/register', async (req, res) => {
  try {
    const { name, branch, semester, email, password } = req.body;
    const hashedPassword = await argon.hash(password, { saltLength: 12 });
    const user = User.create({
      name,
      branch,
      semester,
      email,
      password: hashedPassword,
    });
    await user.save();

    const url = await createUrl();
    sendEmail(email, url);

    res.status(200);
  } catch (err) {
    console.log(err);
    res.json({ error: 'something went wrong' });
  }
});

// {
//   "name":"somkumar",
//   "branch":"cse",
//   "semester":"s5",
//   "email":"somkumarav@gmil.com",
//   "password":"bob",
// }
