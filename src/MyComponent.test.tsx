import { TestFixture, Test, Expect } from "alsatian";
import { shallow } from "enzyme";
import * as React from "react";
import { MyComponent } from "./MyComponent";

@TestFixture()
export class MyComponentTests {
    @Test("Should render correct message")
    public correctMessage() {
        const component = <MyComponent foo={42} />;
        const wrapper = shallow(component);
        const text = wrapper.find("div").render().text();

        Expect(text).toBe("The number is 42.");
    }
}