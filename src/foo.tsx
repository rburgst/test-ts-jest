import { createRef, FunctionComponent } from 'preact';
import React from 'preact/compat';
import { useState } from 'preact/compat';

export const Foo: FunctionComponent = () => {
    const [foo, setFoo] = useState(false)
    console.log("createRef", createRef)
    return <div>foo</div>
}