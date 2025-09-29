import { localStorage } from './localStorage.mjs';
import PF from '../PF.js'

export default class PFDAO {
    #pf;
    constructor(pf){
        if (pf instanceof PF){
            this.#pf = pf;
        }
    }
    toJSON()
    {
        let fones = []
        for (let fone of this.#pf.getTelefones()){
            fones.push({
                numero: fone.getNumero(),
                ddd: fone.getDdd(),
            })
        }
        return{
            nome: this.#pf.getNome(),
            email: this.#pf.getEmail(),
            endereco: {
                logradouro: this.#pf.getEndereco().getLogradouro(),
                cep: this.#pf.getEndereco().getCep(),
            },
            titulo: {
                numero: this.#pf.getTitulo().getNumero(),
                zona: this.#pf.getTitulo().getZona(),
                secao: this.#pf.getTitulo().getSecao(),
            },
            telefone: fones
        }
    }
    saveJSON() { 
        localStorage.setItem("pf", JSON.stringify(this.toJSON()));
      }
      recoveryJSON() { 
        return JSON.parse(localStorage.getItem("pf")); 
      }
} 