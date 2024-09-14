const { rejects, deepStrictEqual } = require("assert");
const { error } = require("./src/constants");
const File = require("./src/file");

(async () => {
  {
    const filePath = "./mocks/emptyFile-invalid.csv";

    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);

    await rejects(File.csvToJson(filePath), rejection);
  }

  {
    const filePath = "./mocks/fourItems-invalid.csv";

    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);

    await rejects(File.csvToJson(filePath), rejection);
  }

  {
    const filePath = "./mocks/threeItems-invalid.csv";
    const result = await File.csvToJson(filePath);

    const expected = [
      {
        name: "Erick",
        id: 123,
        profession: "javascript instructor",
        birthDay: 1999,
      },
      {
        name: "Augusto",
        id: 321,
        profession: "javascript Specialist",
        birthDay: 2003,
      },
      {
        name: "joaozinho",
        id: 132,
        profession: "java developer",
        birthDay: 2001,
      },
    ];

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();
