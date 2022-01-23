let policy: TrustedTypePolicy

const getOrCreatePolicy = () => {
  if (policy) return policy
  policy = window.trustedTypes?.createPolicy('cra-app', { createHTML: (x) => x }) as TrustedTypePolicy
  return policy
}

export const __allowUnsafeValue = (value: string) => {
  return getOrCreatePolicy().createHTML(value)
}
