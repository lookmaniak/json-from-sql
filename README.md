# JSON from SQL
Simple js library for parsing sql file dump (.sql) into usable JSON object.

## Install:

```bash
npm i json-from-sql
```


## Basic Usage Using file input:

```html
<input type="file" id="file-input">
```

```javascript
import JSONFromSql from 'json-from-sql'

const inputFile = document.getElementById('file-input')
inputFile.addEventListener('change', function(e){
      const json = JSONFromSql(e.target.files[0])
      const result = json.parse()
})
```

## LICENSE
This project is licensed under the MIT License.
