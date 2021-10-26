const whitelistAllAndLog = (name) => (value, type, sink) => {
  console.groupCollapsed(`Ignoring trusted types violation in policy: ${name}`)
  console.info({ value, type, sink })
  console.groupEnd()
  return value
}

// NOTE: We use the "Report-Only" mode of CSP in conjunction with default policy + enforcing mode.
//
// Report only has a disadvantage, that all sinks are allowed and nothing breaks
// Enforcement + default policy breaks fast (+ can ignore certain sinks)
window.trustedTypes.createPolicy('default', {
  // createHTML: whitelistAllAndLog('createHTML'),
  createScript: (value, type, sink) => {
    // Ignore eval violation
    if (sink === 'eval') {
      return value
    }

    throw Error('Unsafe value')
  },
  // createScriptURL: whitelistAllAndLog('createScriptURL'),
})
