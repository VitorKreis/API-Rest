import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: [
          'Credenciais Inavalidas',
        ],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: [
          'Usuario invalido',
        ],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: [
          'Senha invalido',
        ],
      });
    }
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({
      Token:
  token,
    });
  }
}

export default new TokenController();
