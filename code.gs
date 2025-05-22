function doGet(e) {
  var template = HtmlService.createTemplateFromFile('main');
  return template
    .evaluate()
    .setTitle('Job Code Creation')
    .setSandboxMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');  
}
