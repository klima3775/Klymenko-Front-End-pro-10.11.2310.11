const jsonString1 = '{"name": "John", "age": 30, "city": "New York"}';
const jsonString2 = '{"name": "Alice", "age": "twenty-five", "city": "London"}';

function parseJSON(jsonString) {
  try {
    const parseJson = JSON.parse(jsonString);
    if (parseJson.age && typeof parseJson.age !== "number") {
      throw new Error("Unexpected string in JSON");
    }
    return parseJson;
  } catch (error) {
    return { error: `Invalid JSON: ${error.message}` };
  }
}

console.log(parseJSON(jsonString1));
console.log(parseJSON(jsonString2));
