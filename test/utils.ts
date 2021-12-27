import { assert } from "chai";

const assertVMException = (error: Error) => {
  const hasException = error.toString().search("VM Exception")
  assert(hasException, "Should expect a VM Exception error")
}

export { assertVMException }