export async function fakeLoad(duration) {
  await new Promise((resolve) => setTimeout(resolve, duration));
  return true
}
