/**
 * シート内の表形式に合わせた、一行を作成します。(2行以上のJSONの場合、2行目以降は無視します)
 * （最後にアンダーバーつけると外部参照できなくできなくなるみたい。便利！)
 * @param {string} sheetName シートの名称
 * @param {string} postJson JSON形式の文字列 
 */ 
function createRow_(sheetName, postJson) {
    var keys = sheetName.getDataRange().getValues()[0];
    var row = [];
    
    keys.map(function(key) {
      row.push(postJson[key]);
    });
    
    return row;
  }
  
  /**
   * データを追加します。(2行以上のJSONの場合、2行目以降は無視します)
   * @param {string} sheetName シートの名称
   * @param {string} postJson JSON形式の文字列 
   */ 
  function insert(sheetName, postJson) {
    var row = createRow_(sheetName, postJson);
    sheetName.appendRow(row);
  }
  
  /**
   * データを更新します。(2行以上のJSONの場合、2行目以降は無視します)
   * A列を主キーとして扱います。
   * @param {string} sheetName シートの名称
   * @param {string} postJson JSON形式の文字列
   */ 
  function update(sheetName, postJson) {
    var row = createRow_(sheetName, postJson);
    var data = sheetName.getDataRange().getValues();
    
    for (var i = 0; i < data.length; i++) {
      if (data[i][0] === row[0]) {
        sheetName.getRange(i + 1, 1, 1, data[i].length).setValues([row]);
      }
    }
  }
  
  /**
   * データを削除します。(2行以上のJSONの場合、2行目以降は無視します)
   * A列を主キーとして扱います。
   * @param {string} sheetName シートの名称
   * @param {string} postJson JSON形式の文字列 
   */ 
  function remove(sheetName, postJson) {
    var row = createRow_(sheetName, postJson);
    var data = sheetName.getDataRange().getValues();
    
    for (var i = 0; i < data.length; i++) {
      if (data[i][0] === row[0]) {
        sheetName.deleteRow(i + 1);
      }
    }
  }
  
  
  
  