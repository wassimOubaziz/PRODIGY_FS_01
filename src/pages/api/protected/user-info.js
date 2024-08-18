import { authMiddleware } from "../../../middleware/authMiddleware";

function handler(req, res) {
  res.status(200).json({ user: req.user });
}

export default authMiddleware(handler);
