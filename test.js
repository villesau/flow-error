// @flow
import * as React from "react";
import { shallow } from "enzyme";

const shallowWrapper = shallow(<div />);
declare class ClassComponent extends React.Component<*, *> {
  instanceMethod(): number
}

const componentWrapper = shallow(<ClassComponent/>);
(componentWrapper.instance().instanceMethod(): number);

shallowWrapper.instance();
