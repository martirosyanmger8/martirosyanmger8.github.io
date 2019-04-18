export const calculateId = (array) => array.length + 1;

export const calculateMoney = (array) => {
  return array.reduce((sum, item) => sum + item.value, 0);
};

export const getMonth = () => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const date = new Date();
  return monthNames[date.getMonth()];
}