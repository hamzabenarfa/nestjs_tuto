import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserRole } from 'src/enums/role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Prop()
  nom: string;

  @Prop()
  prenom: string;

  @Prop()
  dateNaissance: string;

  @Prop()
  adresse: string;

  @Prop()
  codePostal: string;

  @Prop()
  ville: string;

  @Prop()
  pays: string;

  @Prop()
  telephone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
