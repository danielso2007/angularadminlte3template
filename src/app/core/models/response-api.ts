export class ResponseApi {

  constructor(
    public data?: any,
    public erros?: string[],
    public validation?: boolean
  ) { }

}
