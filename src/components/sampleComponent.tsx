import * as React from 'react';
import './sampleComponent.scss';

const exampleFunction = (param: string) => {
    return {
        param,
    };
};

export type IExampleFunction = typeof exampleFunction;

interface IStateSample {
    val1: string;
    val2: string;
}

export class SampleComponent extends React.Component<{}, IStateSample> {
    private extendsState1: this['setState'] = (value) => {
        return this.setState(value);
    }

    private extendsState2 = <Key extends keyof IStateSample>(stateChange: Pick<IStateSample, Key>) => {
        return this.setState(stateChange);
    }
}

type getStateOf<T extends React.Component> = T extends React.Component<any, infer T2> ? T2 : unknown;

type ReaquiredState = getStateOf<SampleComponent>;
