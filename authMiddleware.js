const authMiddleware = (req, res, next) => {
  req.user = { id: 1, name: "Test User" }; 
  next();
};

export default authMiddleware;