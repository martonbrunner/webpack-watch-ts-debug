import Model from './test.model';

interface Model2 {
    name: string;
    // Uncommenting this will result in a build fail
    // value: string;
}

const model: Model = {
    name: 'test'
};

const model2: Model2 = {
    name: 'test'
};
