const moduleExist = (moduleName) => {
  try {
    require.resolve(moduleName);
  } catch (error) {
    return false;
  }
  return true;
}
module.exports = {
  moduleExist,
};