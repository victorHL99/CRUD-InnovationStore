import cepRepository from "../repositories/cepRepository";

async function getAllCeps(url: string) {
  const ceps = await cepRepository.getAllCepsFromIBGE(url);
  await _insertCep(ceps);

  return ceps;
}

async function _insertCep(ceps) {
  await cepRepository.insertCeps(ceps);

}


const cepService = {
  getAllCeps

}

export default cepService;