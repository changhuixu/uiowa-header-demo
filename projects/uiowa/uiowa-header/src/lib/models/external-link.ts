export class ExternalLink {
  constructor(
    public text: string,
    public url: string,
    public target: '_blank' | '_self' | '_parent' | '_top' = '_blank'
  ) {}
}
