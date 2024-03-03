class SQLToJsonConverter {
    constructor(sqlDump) {
      this.sqlDump = sqlDump;
      this.jsonData = [];
      this.insertRegex = /INSERT INTO `.*` \(([^)]+)\) VALUES \(([^)]+)\);/g;
      this.jsonTable = {}
    }
  
    convert() {
      let match;
      while ((match = this.insertRegex.exec(this.sqlDump)) !== null) {
        const columns = match[1].split(', ').map(column => column.replace(/`/g, ''));
        const values = match[2].split(', ').map(value => value.replace(/'/g, ''));
  
        const obj = {};
        columns.forEach((column, index) => {
          obj[column] = values[index];
        });
  
        this.jsonData.push(obj);

      }
      this.jsonTable[this.sqlDump.match(/CREATE TABLE `([^`]+)`/)[1]] = this.jsonData

      return this.jsonTable;
    }
  }
  
  export default SQLToJsonConverter
  