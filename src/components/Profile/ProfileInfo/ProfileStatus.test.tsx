import React from "react";
import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test('Profile status from props should be in the state', () => {
        const component = create(
            <ProfileStatus
                updateStatus={() => console.log(1)}
                profileStatus='New status'/>
        );
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe('New status');
    })

    test("After creation span should be displayed", () => {
        const component = create(
            <ProfileStatus
                updateStatus={() => console.log(1)}
                profileStatus='New status'/>
        );
        const root = component.root;
        const span = root.findByType('span');
        expect(span).not.toBeNull();
    })

    test("After creation span should contains correct status", () => {
        const component = create(
            <ProfileStatus
                updateStatus={() => console.log(1)}
                profileStatus='New status'/>
        );
        const root = component.root;
        const span = root.findByType('span');
        expect(span.children[2]).toBe('New status');
    })

    test("After creation Input shouldn't be displayed", () => {
        const component = create(
            <ProfileStatus
                updateStatus={() => console.log(1)}
                profileStatus='New status'/>
        );
        const root = component.root;
        expect(() => {
            root.findByType('input');
        }).toThrow();
    })

    test("Input should be displayed in editMode instead of span", () => {
        const component = create(
            <ProfileStatus
                updateStatus={() => console.log(1)}
                profileStatus='New status'/>
        );
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input')
        expect(input.props.value).toBe('New status');
    })

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(
            <ProfileStatus
                profileStatus = 'New status'
                updateStatus={mockCallback}/>
        );
        const instance = component.getInstance();
        // @ts-ignore
        instance.deActivateEditModeHandler();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
});