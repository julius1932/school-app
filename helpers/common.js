/**
 * array data group by based on key
 * @param data
 * @param key
 * @param result
 */
exports.groupBy = (data, key) => {
  const result = data.reduce((finalData, item) => {
    const date = item[key].toLowerCase();
    if (!finalData[date]) {
      finalData[date] = [];
    }
    finalData[date].push(item);
    return finalData;
  });
  return result
};

exports.isEmpty=(str)=>{
  const unwanted=[undefined,"undefined",null,"null"]
  if (str && str.trim()&&!unwanted.include(str.trim())) {
     return false;
  }
  true;
}
