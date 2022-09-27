import { foo } from "."

describe("index", () => {
    it("should not blow up", () => {
        expect(foo()).toEqual("foo")
    })
})