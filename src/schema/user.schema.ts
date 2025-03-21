import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
	@Prop()
	fname: string;

	@Prop()
	lname: string;

	@Prop()
	fname_alias: string;

	@Prop()
	lname_alias: string;

	@Prop()
	phone: string;

	@Prop()
	phoneCountry: string;

	@Prop()
	cca3: string;

	@Prop()
	email: string;

	@Prop()
	currentpre: string;

	@Prop()
	city: string;

	@Prop()
	location: string;

	@Prop()
	wallet_address: string;

	@Prop()
	wallet_type: string;

	@Prop()
	nonce: string;

	@Prop()
	bio: string;

	@Prop()
	profile: string;

	@Prop()
	created_at: string;

	@Prop()
	updated_at: string;

	@Prop()
	google_auth_secret: string;

	@Prop({ default: false })
	is_2FA_enabled: boolean;

	@Prop({ default: true })
	is_2FA_login_verified: boolean;

	@Prop()
	last_login_at:string;

	@Prop()
	joined_at:string;

	@Prop({ default: false })
	is_banned: boolean;

	@Prop({ default: 0 })
	is_verified: number;

	@Prop({ default: false })
	kyc_completed: boolean;

	@Prop({ default: false })
	email_verified: boolean;

	@Prop()
	phone_verified: number;

	@Prop()
	passport_url: string;

	@Prop()
	user_photo_url: string;

	@Prop()
	admin_checked_at: string;
	
	@Prop()
	kyc_submitted_date:string

	@Prop()
	twilioOTP: string;
	@Prop()
	otpCreatedAt: string;
	@Prop()
	otpExpiresAt: string;
	@Prop({ default: true })
	is_2FA_twilio_login_verified: boolean;
	@Prop({ default: false })
	is_2FA_SMS_enabled: boolean;
}	

export const UserSchema = SchemaFactory.createForClass(User);