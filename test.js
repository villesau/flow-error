// @flow
import * as React from "react";
// copy from libdef starts
import type { ElementRef } from 'react';
declare class Wrapper<C> {
  instance(): $Call<<C>(Class<C>) => C, $ElementType<C, 'type'>>;
  instance(): ElementRef<C>;
}

declare class ShallowWrapper<C> extends Wrapper<C> {}

declare function shallow<C>(node: C): ShallowWrapper<C>;
// copy from libdef ends
const shallowWrapper = shallow(<div />);
declare class ClassComponent extends React.Component<*, *> {
  instanceMethod(): number
}

const componentWrapper = shallow(<ClassComponent/>);
(componentWrapper.instance().instanceMethod(): number);

shallowWrapper.instance();
