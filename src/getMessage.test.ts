import { TestFixture, Test, TestCase, Expect } from "alsatian";
import { getMessage } from "./getMessage";

@TestFixture()
export class GetMessageTests {
    @Test("Returns correct message")
    @TestCase(-1, "The number is -1.")
    @TestCase(0, "The number is 0.")
    @TestCase(1, "The number is 1.")
    @TestCase(42, "The number is 42.")
    public correctMessage(foo: number, expected: string) {
        const message = getMessage(foo);
        Expect(message).toBe(expected);
    }
}