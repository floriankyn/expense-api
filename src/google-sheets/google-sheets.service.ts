import {Injectable} from '@nestjs/common';
import {google} from 'googleapis';
import {GoogleAuth, OAuth2Client} from "google-auth-library";
import {CreateTransactionsDto} from "../transactions/dto/create-transactions.dto";

@Injectable()
export class GoogleSheetsService {
    private auth: GoogleAuth;
    private client: OAuth2Client

    constructor() {
        this.auth = new google.auth.GoogleAuth({
            credentials: {
                type: "service_account",
                project_id: process.env.GOOGLE_PROJECT_ID,
                private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,

            },
            scopes: "https://www.googleapis.com/auth/spreadsheets",
        });

        this.initializeClient().then(r => r).catch(e => e);
    }

    private async initializeClient() {
        this.client = await this.auth.getClient() as OAuth2Client;
    }

    async getSheetStatus() {
        const sheets = google.sheets({ version: 'v4', auth: this.client });
        const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

        try {
            const response = await sheets.spreadsheets.get({
                auth: this.auth,
                spreadsheetId,
            });


            return response.data;
        } catch (error) {
            console.error('Error fetching data from Google Sheets:', error);
        }
    }

    async updateSpreadsheet(createDto: CreateTransactionsDto) {
        const sheets = google.sheets({version: 'v4', auth: this.client});
        const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

        try {
            const date = new Date(createDto.date);

            const response = await sheets.spreadsheets.values.append({
                auth: this.auth,
                spreadsheetId,
                range: "Transactions!B5:G",
                valueInputOption: "RAW",
                requestBody: {
                    values: [
                        [
                            `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`,
                            createDto.amount,
                            createDto.store,
                            createDto.card,
                            createDto.location,
                            "Waiting"
                        ]
                    ]
                }
            });

            return response.data;
        } catch (error) {
            console.error('Error fetching data from Google Sheets:', error);
        }
    }
}
