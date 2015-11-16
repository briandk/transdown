var Handlebars = require("/Users/briandanielak/dev/transdown/bower_components/handlebars/");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['transcriptTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", buffer = 
  "  <table class=\"table\n                table-hover\">\n    <thead>\n      <tr>\n        <th class=\"episode-title\" colspan=\"4\">\n            <h4>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n        </th>\n      </tr>\n      <tr>\n        <th>Time</th>\n        <th>Speaker</th>\n        <th>Speech</th>\n        <th>Media</th>\n      </tr>\n    </thead>\n\n    <tbody>\n";
  stack1 = ((helper = (helper = helpers.turns || (depth0 != null ? depth0.turns : depth0)) != null ? helper : alias2),(options={"name":"turns","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.turns) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </tbody>\n  </table>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <tr>\n            <td class=\"time\">"
    + alias4(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timestamp","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"speaker-name\">"
    + alias4(((helper = (helper = helpers.speakerName || (depth0 != null ? depth0.speakerName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speakerName","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"speech\">"
    + alias4(((helper = (helper = helpers.speech || (depth0 != null ? depth0.speech : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speech","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>\n              <div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasAccompanyingMedia : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </div>\n            </td>\n          </tr>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.accompanyingMedia || (depth0 != null ? depth0.accompanyingMedia : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"accompanyingMedia","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.accompanyingMedia) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <img src=\""
    + alias4(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"source","hash":{},"data":data}) : helper)))
    + "\"\n                     class=\"accompanying-media\n                            img-responsive\"\n                     alt=\""
    + alias4(((helper = (helper = helpers.altText || (depth0 != null ? depth0.altText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"altText","hash":{},"data":data}) : helper)))
    + "\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.episodes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});
