import cepRepository from "../repositories/cepRepository";

async function getAllCeps(url: string) {
  const ceps = await cepRepository.getAllCepsFromIBGE(url);
  return ceps;
}



const cepService = {
  getAllCeps

}

export default cepService;