function doGet() {
    var data = gssTableSearch.getData("シート1")
    return ContentService.createTextOutput(JSON.stringify(data, null, 2))
    .setMimeType(ContentService.MimeType.JSON);
  }
  
  function doPost(e) {
    var sheetName = SpreadsheetApp.getActive().getSheetByName('シート1');
    var postJson = JSON.parse(e.postData.contents);
    
    switch(e.parameter.action) {
      case "insert":
        gssTableUpdate.insert(sheetName, postJson);
        
        break;
   
      case "update":
        gssTableUpdate.update(sheetName, postJson);  
  
        break;
   
   
      case "delete":
        gssTableUpdate.remove(sheetName, postJson);
        
        break;
   
   
      default:
        console.log("動作モードが指定されていません。");
        break;
    }
  }
  
  