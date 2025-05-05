// src/google-sheets/schemas/spreadsheet-auth.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type SpreadsheetAuthDocument = SpreadsheetAuth & Document

@Schema()
export class SpreadsheetAuth {
    @Prop({ unique: true, required: true })
    spreadsheetId: string

    @Prop({ type: Object, required: true })
    tokens: {
        access_token: string
        refresh_token: string
        scope: string
        token_type: string
        expiry_date: number
    }
}

export const SpreadsheetAuthSchema = SchemaFactory.createForClass(SpreadsheetAuth)
