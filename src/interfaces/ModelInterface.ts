export interface Model {
  create(object: T): Promise<T>,
  read(): Promise<T>[],
  readOnde(id: string): Promise<T>,
  update(id: string): Promise<T> | null,
  delete(id: string): Promise<T> | null
}