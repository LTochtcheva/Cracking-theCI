// Write a method to replace all  spaces in a string with '%20'

export default (str) => {

  let noSpaceArr = str.split(' ').filter((word) => word !== '');
  return noSpaceArr.join('%20');
}
