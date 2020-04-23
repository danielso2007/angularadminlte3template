import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { ViaCEP } from "../models/viacep.model";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { throwError, Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class SharedService {

  constructor(private datePipe: DatePipe, protected http: HttpClient) { }

  dateToString(date: Date): string {
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    const HH = date.getHours();
    const MM = date.getMinutes();

    return [
      (dd > 9 ? "" : "0") + dd + "/",
      (mm > 9 ? "" : "0") + mm + "/",
      date.getFullYear() + " " + HH + ":" + MM
    ].join("");
  }

  datediff(first: number, second: number): number {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }

  dateDiffNowInString(date: Date): string {
    const dtPartida: Date = date;
    const dtChegada: Date = new Date();

    const diffMs = dtChegada.getTime() - dtPartida.getTime();

    const value: {
      d: string;
      h: string;
      m: string;
      s: string;
    } = this.convertMS(diffMs);

    let txt = "";

    if (parseInt(value.d, 0) > 0) {
      txt = txt + value.d + " dia" + (parseInt(value.d, 0) > 1 ? "s " : " ");
    }
    if (parseInt(value.h, 0) > 0 && parseInt(value.d, 0) < 30) {
      txt = txt + value.h + " hora" + (parseInt(value.h, 0) > 1 ? "s " : " ");
    }
    if (parseInt(value.m, 0) > 0 && parseInt(value.d, 0) === 0) {
      txt = txt + value.m + " minuto" + (parseInt(value.m, 0) > 1 ? "s " : " ");
    }
    if (
      parseInt(value.s, 0) > 0 &&
      parseInt(value.d, 0) === 0 &&
      parseInt(value.m, 0) === 0
    ) {
      txt =
        txt + value.s + " segundo" + (parseInt(value.s, 0) > 1 ? "s " : " ");
    }

    return txt;
  }

  ngBoostrapDateToDate(ngBoostrapDate: {
    year: number;
    month: number;
    day: number;
  }): Date {
    return new Date(
      ngBoostrapDate.year,
      ngBoostrapDate.month,
      ngBoostrapDate.day
    );
  }

  dateDelayString(date: Date): string {
    // Colocar como parâmetro. Tem que resolver em 24 horas.
    const h = 24;
    date.setTime(date.getTime() + h * 60 * 60 * 1000);
    const dtPartida: Date = date;
    const dtChegada: Date = new Date();

    const diffMs = dtChegada.getTime() - dtPartida.getTime();

    const value: {
      d: string;
      h: string;
      m: string;
      s: string;
    } = this.convertMS(diffMs);

    let txt = "";

    if (parseInt(value.d, 0) > 0) {
      txt = txt + value.d + " dia" + (parseInt(value.d, 0) > 1 ? "s " : " ");
    }
    if (parseInt(value.h, 0) > 0 && parseInt(value.d, 0) < 30) {
      txt = txt + value.h + " hora" + (parseInt(value.h, 0) > 1 ? "s " : " ");
    }
    if (parseInt(value.m, 0) > 0 && parseInt(value.d, 0) === 0) {
      txt = txt + value.m + " minuto" + (parseInt(value.m, 0) > 1 ? "s " : " ");
    }
    if (
      parseInt(value.s, 0) > 0 &&
      parseInt(value.d, 0) === 0 &&
      parseInt(value.m, 0) === 0
    ) {
      txt =
        txt + value.s + " segundo" + (parseInt(value.s, 0) > 1 ? "s " : " ");
    }

    return txt;
  }

  dateDelayStringTimeFirstResponse(time: number, date: Date): string {
    if (!time) {
      const dtPartida: Date = new Date();
      const dtChegada: Date = new Date();
      // Colocar em parâmetro a expiração da primeira resposta.
      dtChegada.setTime(date.getTime() + 24 * 60 * 60 * 1000);

      const diffMs = dtChegada.getTime() - dtPartida.getTime();

      const value: {
        d: string;
        h: string;
        m: string;
        s: string;
      } = this.convertMS(diffMs);

      let txt = "";

      if (parseInt(value.d, 0) > 0) {
        txt = txt + value.d + " dia" + (parseInt(value.d, 0) > 1 ? "s " : " ");
      }
      if (parseInt(value.h, 0) > 0 && parseInt(value.d, 0) < 30) {
        txt = txt + value.h + " hora" + (parseInt(value.h, 0) > 1 ? "s " : " ");
      }
      if (parseInt(value.m, 0) > 0 && parseInt(value.d, 0) === 0) {
        txt =
          txt + value.m + " minuto" + (parseInt(value.m, 0) > 1 ? "s " : " ");
      }
      if (
        parseInt(value.s, 0) > 0 &&
        parseInt(value.d, 0) === 0 &&
        parseInt(value.m, 0) === 0
      ) {
        txt =
          txt + value.s + " segundo" + (parseInt(value.s, 0) > 1 ? "s " : " ");
      }
      if (parseInt(value.d, 0) < 0) {
        txt = txt + value.d + " dia" + (parseInt(value.d, 0) < 1 ? "s " : " ");
      }
      if (parseInt(value.h, 0) < 0 && parseInt(value.d, 0) < 30) {
        txt = txt + value.h + " hora" + (parseInt(value.h, 0) < 1 ? "s " : " ");
      }
      if (parseInt(value.m, 0) < 0 && parseInt(value.d, 0) === 0) {
        txt =
          txt + value.m + " minuto" + (parseInt(value.m, 0) < 1 ? "s " : " ");
      }
      if (
        parseInt(value.s, 0) < 0 &&
        parseInt(value.d, 0) === 0 &&
        parseInt(value.m, 0) === 0
      ) {
        txt =
          txt + value.s + " segundo" + (parseInt(value.s, 0) < 1 ? "s " : " ");
      }

      return txt;
    }
    return undefined;
  }

  convertMS(ms): { d: string; h: string; m: string; s: string } {
    let d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return { d, h, m, s };
  }

  validarCNPJ(cnpj: string): boolean {
    cnpj = cnpj.replace(/[^\d]+/g, "");

    if (cnpj === "") {
      return false;
    }
    if (cnpj.length !== 14) {
      return false;
    }

    // LINHA 10 - Elimina CNPJs inválidos conhecidos
    if (
      cnpj === "00000000000000" ||
      cnpj === "11111111111111" ||
      cnpj === "22222222222222" ||
      cnpj === "33333333333333" ||
      cnpj === "44444444444444" ||
      cnpj === "55555555555555" ||
      cnpj === "66666666666666" ||
      cnpj === "77777777777777" ||
      cnpj === "88888888888888" ||
      cnpj === "99999999999999"
    ) {
      return false;
    }

    // Valida DVs LINHA 23 -
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    const digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    let i = 0;
    for (i = tamanho; i >= 1; i--) {
      soma = soma + Number(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado !== Number(digitos.charAt(0))) {
      return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += Number(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado !== Number(digitos.charAt(1))) {
      return false;
    }

    return true; // LINHA 51
  }

  validarCPF(strCPF: string): boolean {
    let soma;
    let resto;
    soma = 0;

    if (
      strCPF === "00000000000" ||
      strCPF === "11111111111" ||
      strCPF === "22222222222" ||
      strCPF === "33333333333" ||
      strCPF === "44444444444" ||
      strCPF === "55555555555" ||
      strCPF === "66666666666" ||
      strCPF === "77777777777" ||
      strCPF === "88888888888" ||
      strCPF === "99999999999"
    ) {
      return false;
    }

    let i = 0;
    for (i = 1; i <= 9; i++) {
      soma = soma + Number(strCPF.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
      resto = 0;
    }

    if (resto !== Number(strCPF.substring(9, 10))) {
      return false;
    }

    soma = 0;

    for (i = 1; i <= 10; i++) {
      soma = soma + Number(strCPF.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
      resto = 0;
    }

    if (resto !== Number(strCPF.substring(10, 11))) {
      return false;
    }
    return true;
  }

  formatarCPF(cpf): string {
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
  }

  formatarCNPJ(cnpj): string {
    cnpj = cnpj.replace(/\D/g, "");
    cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2");
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2");
    cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");
    return cnpj;
  }

  transformDate(date: Date, format?: string) {
    return this.datePipe.transform(date, format ? format : "dd/MM/yyyy");
  }

  viaCEP(cep: string): Observable<ViaCEP> {
    if (cep && cep.trim() !== "" && cep.length === 8) {
      return this.http.get(`https://viacep.com.br/ws/${cep}/json/`).pipe(
        catchError((error: any) => {
          console.error("ERRO NA REQUISIÇAO => ", error);
          return throwError(error);
        }),
        map((responseApi: any): any => {
          return responseApi;
        })
      );
    } else {
      return undefined;
    }
  }
}
