import { config } from '../../constants/config.constants';
const ENDPOINT = '/games';

export class GamesREST {

    static async list(option) {
        let endoint = `${config.baseURL}${ENDPOINT}`;

        if (option) {
            endoint += '?';
        }

        if (option.page) {
            endoint += `_page=${option.page}${option.limit ? `&_limit=${option.limit}` : ''}`
        }

        try {
            const response =  await fetch(endoint);
            return await response.json();
        } catch (err) {
            return err;
        }
    }
}
