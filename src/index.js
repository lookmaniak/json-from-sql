

import SQLToJsonConverter from './sql-to-json-converter.mjs';

class JSONFromSql {
  constructor(data) {
    this.sqlData = '';
    this.jsonData = {};

    if (typeof data === 'string') {
      this.sqlData = data;
      this.parse();
    } else if (typeof data === 'object') {
      this.readSQLFile(data);
    } else {
      console.log(typeof data);
      throw new Error('Invalid data type or file format');
    }
  }

  async readSQLFile(data) {
    try {
      const reader = new FileReader();

      reader.onload = (event) => {
        this.sqlData = event.target.result;
        this.convert();
      };

      reader.readAsText(data);

    } catch (error) {
      throw new Error('Error reading SQL file: ' + error);
    }
  }

  convert() {
    const converter = new SQLToJsonConverter(this.sqlData);
    this.jsonData = converter.convert();
  }

  parse() {
    return this.jsonData;
  }
}

export default JSONFromSql;
