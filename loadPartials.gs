function loadPartialHTML_(partial) {
  const htmlServ = HtmlService.createTemplateFromFile(partial);
  return htmlServ.evaluate().getContent();
}

function loadSearchView(){
  
  return loadPartialHTML_("search");
  
}

function loadAddJobCodeView(){
  
  return loadPartialHTML_("addjobcode");
  
}

function loadEditJobCodeView(){
  
  return loadPartialHTML_("editjobcode");
  
}
