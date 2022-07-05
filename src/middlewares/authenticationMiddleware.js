export function validateSingUp(req, res, next) {     
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.sendStatus(422);
    }
    
    next();    
}

export function validateSingIn(req, res, next) {     
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(422);
    }

    next();    
}

export async function validateSession(req, res, next){
  
  const authorization = req.headers.authorization || "";
  const token = authorization.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  let user;

  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return res.sendStatus(401);
  }

  res.locals.user = {
    id: user.id,
  };
  
  next(); 
}