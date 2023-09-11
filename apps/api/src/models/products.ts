import { getModelForClass, pre, prop } from "@typegoose/typegoose";

class ProductProperties {
  @prop()
  public name!: string;
  @prop()
  public values!: string[];
}

class Specifications {
  @prop()
  public name!: string;
  @prop()
  public values!: string;
}

class ProductClass {
  @prop({ required: true })
  public name!: string;

  @prop()
  public images!: string[];

  @prop({ required: true })
  public description!: string;

  @prop({ required: true })
  public price!: number;

  @prop({ required: true })
  public category!: string;

  @prop({ type: () => [ProductProperties] })
  public options!: ProductProperties[];

  // @prop()
  // public color?: string;

  // @prop()
  // public size?: number;

  @prop()
  public review?: string;

  @prop()
  public specification?: string;
}

export default ProductClass;

export const Product = getModelForClass(ProductClass);
