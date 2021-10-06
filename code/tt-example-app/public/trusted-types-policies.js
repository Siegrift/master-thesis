const whitelistAllAndLog = (name) => (value, sink) => {
  console.groupCollapsed(`Ignoring trusted types violation in policy: ${name}`)
  console.info({ value, sink })
  console.groupEnd()
  return value
}

window.trustedTypes.createPolicy('default', {
  createHTML: whitelistAllAndLog('createHTML'),
  createScript: whitelistAllAndLog('createScript'),
  createScriptURL: whitelistAllAndLog('createScriptURL'),
})
