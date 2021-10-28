import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="MyProject.com"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("MyProject.com");
    });

    test("After creation span should be displayed", () => {
        const component = create(<ProfileStatus status="MyProject.com"/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test("After creation input should not be displayed", () => {
        const component = create(<ProfileStatus status="MyProject.com"/>);
        const root = component.root;
        expect(() => {
            const input = root.findByType('input')
        }).toThrow();
    });

    it("Transition into editMode, input instead of span", () => {
        const component = create(<ProfileStatus status="MyProject.com"/>);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onClick();
        const input = root.findByType('input')
        expect(input.props.value).toBe('MyProject.com')
    });

    it("When clicking status, Span should disappear", () => {
        const component = create(<ProfileStatus status="MyProject.com"/>);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onClick();
        expect(() => {
            const input = root.findByType('span')
        }).toThrow()
    });

    it("Callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="MyProject.com" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditState();
        expect(mockCallback.mock.calls.length).toBe(1)
    });

})
