function getDataForSearch() {
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Active Req Master_sheet_Apr_2021");
  return ws.getRange(2,3, ws.getLastRow()-1, 15).getValues();
  
  
}

function getJobCodebyId(id){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Copy of Active Req Master_sheet_Apr_2021");
  const jobcode = ws.getRange(2,3, ws.getLastRow()-1,1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex =  jobcode.indexOf(id.toString().toLowerCase());
  const rownumber = posIndex === -1 ? 0 : posIndex + 2;
  const jobcodeinfo = ws.getRange(rownumber, 1, 3, 14).getValues()[0];
  
   return {Jobcode: jobcodeinfo[0], client: jobcodeinfo[3], skillType:jobcodeinfo[4], skill: jobcodeinfo[5], clientSpoc: jobcodeinfo[6], culminantSpoc: jobcodeinfo[7], clientManager: jobcodeinfo[14], status: jobcodeinfo[11] }
  
}

function editJobCodeById(id,jobcodeinfo ){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Copy of Active Req Master_sheet_Apr_2021");
  const jobcode = ws.getRange(2,3, ws.getLastRow()-1,1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex =  jobcode.indexOf(id.toString().toLowerCase());
  const rownumber = posIndex === -1 ? 0 : posIndex + 2;
  ws.getRange(rownumber,14, 1, 1).setValues([[
                                             
                                              jobcodeinfo.status
                                               ]]);
  return true;
}
function addjobcode(jobcodeinfo){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Copy of Active Req Master_sheet_Apr_2021");
  
  ws.appendRow([
                ,
                jobcodeinfo.sharedDate,
                ,
                jobcodeinfo.client,
                jobcodeinfo.skilltype,
                jobcodeinfo.skill,
                jobcodeinfo.clientSpoc,
                jobcodeinfo.budget,
                jobcodeinfo.culminantSpoc,
                jobcodeinfo.teamLead,
                jobcodeinfo.principleConsultant,
                jobcodeinfo.weekday,
                jobcodeinfo.location,
                jobcodeinfo.position,
                jobcodeinfo.clientManager,
                jobcodeinfo.status,
                
  ]);

}

function getDataForView() {
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Active Req Master_sheet_Apr_2021");
  return ws.getRange(2,3, ws.getLastRow()-1, 14).getValues();
  
  
}
