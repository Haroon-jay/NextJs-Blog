const {PHASE_DEVELOPMENT_SERVER}=require("next/constants")
module.exports =(phase)=> {
  return{
  reactStrictMode: true,
env:{
  MONGO_DB_USERNAME:'Haroon',
    MONGO_DB_PASSWORD:"Warrobots69.",
    MONGO_DB_NAME:"my-blog"
}}
}
