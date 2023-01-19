import { Request, Response } from "express";
import cepService from "../services/cepService";


async function getCEP(req: Request, res: Response) {
  const cepData = await cepService.getAllCeps(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios`);
  console.table(cepData);
  return res.status(200).json(cepData);
}

const cepController = {
  getCEP
}

export default cepController;