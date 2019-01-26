import { TestFixture, Test, Expect } from "alsatian";
import { shallow } from "enzyme";
import * as React from "react";
import { App } from "./App";
import { MyComponent } from "./MyComponent";

@TestFixture()
export class AppTests {
    @Test("Should render my component with correct values")
    public correctValues() {
        const component = <App />;
        const wrapper = shallow(component);
        const myComponents = wrapper.find(MyComponent);

        Expect(myComponents.length).toBe(2);
        Expect(myComponents.at(0).props().foo).toBe(42);
        Expect(myComponents.at(1).props().foo).toBe(43);
    }
}