import { foo } from "./index"

describe("index", () => {
    it("should not blow up", () => {
        expect(foo()).toEqual("foo")
    })
})