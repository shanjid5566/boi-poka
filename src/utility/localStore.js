// Read list
const getDataFromLs = () => {
  const dataFromLs = localStorage.getItem("read-list");
  if (dataFromLs) {
    return JSON.parse(dataFromLs);
  } else {
    return [];
  }
};
const setDataToLs = (id) => {
  const data = getDataFromLs();
  if (data.includes(id)) {
    console.log("Already exisits.");
  } else {
    data.push(id);
    const storeData = JSON.stringify(data);
    localStorage.setItem("read-list", storeData);
  }
};
// Whist list
const getWhistDataFromLs = () => {
  const dataFromLs = localStorage.getItem("whist-list");
  if (dataFromLs) {
    return JSON.parse(dataFromLs);
  } else {
    return [];
  }
};
const setWhistDataToLs = (id) => {
  const data = getWhistDataFromLs();
  if (data.includes(id)) {
    console.log("Already exisits.");
  } else {
    data.push(id);
    const storeData = JSON.stringify(data);
    localStorage.setItem("whist-list", storeData);
  }
};
export { getDataFromLs, setDataToLs, getWhistDataFromLs, setWhistDataToLs };
