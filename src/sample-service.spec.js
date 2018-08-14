import {SampleService} from "./sample-service";

describe('SampleService', () => {

    let sampleService;

    beforeEach(() => {
        sampleService = new SampleService();
    });

    it('should instantiate', () => {
        expect(sampleService).toBeTruthy()
    });

    it('should return the input message', () => {
        const message = sampleService.sample('Hello World');
        expect(message).toEqual('Hello World')
    });
});