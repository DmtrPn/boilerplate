
import {getCollection} from '../../../db/mongodb/index';

export class ExampleService {
    static async getApiText() {
        const db = getCollection('test');
        const result = await db.find({}, {values: 0}).toArray();
        return result;
    }
}
