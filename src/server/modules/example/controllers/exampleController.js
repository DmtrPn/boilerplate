import {ExampleService} from '../services/exampleService';

export class ExampleController {
    actionGetApi(req, res) {
        const result = ExampleService.getApiText();
        res.send(result);
    }
}
