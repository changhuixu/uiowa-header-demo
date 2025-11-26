export class HeaderUser {
  public userName: string = '';
  public originalUserName?: string;
}
export class InternalRoute {
  constructor(public text: string, public route?: string, public subMenus?: InternalRoute[]) {}
}
export class ExternalLink {
  constructor(
    public text: string,
    public url: string,
    public target: '_blank' | '_self' | '_parent' | '_top' = '_blank'
  ) {}
}
export class BannerLinks {
  constructor(public link1: ExternalLink, public link2?: ExternalLink) {}
}
