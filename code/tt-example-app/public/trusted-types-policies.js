const whitelistAllAndLog = (name) => (value, sink) => {
  console.groupCollapsed(`Ignoring trusted types violation in policy: ${name}`)
  console.info({ value, sink })
  console.groupEnd()
  return value
}

// NOTE: We use the "Report-Only" mode of CSP in conjunction with default policy + enforcing mode.
//
// Report only has a disadvantage, that all sinks are allowed and nothing breaks
// Enforcement + default policy breaks fast (+ can ignore certain sinks)
window.trustedTypes.createPolicy('default', {
  // createHTML: whitelistAllAndLog('createHTML'),
  // createScript: whitelistAllAndLog('createScript'),
  // createScriptURL: whitelistAllAndLog('createScriptURL'),
})
