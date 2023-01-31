import {Foo} from "./foo"
import {render} from '@testing-library/preact';
import React from "preact/compat";

describe("foo", () => {
    it("should not blow up", async () => {
        const result = render(<Foo/>)
        const {container, debug} = result
        console.log("result", debug(container));

        let found = await result.findByText("foo");
        console.log("found", found);
        expect(found).toBeInTheDocument()
    })
})
