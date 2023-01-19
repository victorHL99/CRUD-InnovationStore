import axios from 'axios';

async function getAllCepsFromIBGE(url: string) {
  const response = await axios.get(url);
  const ceps = response.data.map((cep: any) => {
    return {
      identifier: cep.id,
      name: cep.nome
    }
  })
  return ceps
}



const cepRepository = {
  getAllCepsFromIBGE
}

export default cepRepository;