import client from "../config/database";
import axios from 'axios';

async function getAllCepsFromIBGE(url: string) {
  const response = await axios.get(url);
  const ceps = response.data.map((cep: { id: number, nome: string }) => {
    return {
      identifier: cep.id,
      name: cep.nome
    }
  })

  return ceps
}

async function insertCeps(ceps: { identifier: number; name: string; }[]) {
  await client.cEP.createMany({
    data: ceps
  })
}

const cepRepository = {
  getAllCepsFromIBGE,
  insertCeps
}

export default cepRepository;