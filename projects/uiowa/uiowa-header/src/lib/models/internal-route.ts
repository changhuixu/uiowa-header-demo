export class InternalRoute {
  constructor(
    public text: string,
    public route?: string,
    public subMenus?: InternalRoute[]
  ) {}
}
