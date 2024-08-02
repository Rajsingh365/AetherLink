export const login=async (req, res)=>{
  try{
    const {fullName, username, password, confirmPassword,gender}=req.body;
  }
  catch(error){

  }
}
export const signup=(req, res)=>{
  try{
    const {fullName, username, password, confirmPassword,gender}=req.body;
  }
  catch(error){

  }
}
export const logout=(req, res)=>{
  res.send("Logout Route")
}