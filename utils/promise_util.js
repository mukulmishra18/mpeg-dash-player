/**
 * @function createPromiseCapability
 * @returns {Object} Promise capability object.
 */

export default function createPromiseCapability() {
  let capability = {};
  capability.promise = new Promise(function(resolve, reject) {
    capability.resolve = resolve;
    capability.reject = reject;
  });

  return capability;
}
