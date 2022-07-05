export default async function handleError(error, req, res, next) {
    console.error(error);
    if(error.type === "notFound") {
      return res.sendStatus(404).status("Not found");
    }

    if(error.type === "invalidEmail") {
        return res.sendStatus(409);
    }
    
    return res.sendStatus(500).status("Internal Server Error");
  }