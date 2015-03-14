(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['transcriptTemplate'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, buffer = 
  "  <table class=\"table\n                table-hover\">\n    <thead>\n      <tr>\n        <th class=\"episode-title\" colspan=\""
    + alias3(((helper = (helper = helpers.numberOfColumns || (depth0 != null ? depth0.numberOfColumns : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"numberOfColumns","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</th>\n      </tr>\n      <tr>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </tr>\n    </thead>\n\n    <tbody>\n";
  stack1 = ((helper = (helper = helpers.turns || (depth0 != null ? depth0.turns : depth0)) != null ? helper : alias1),(options={"name":"turns","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.turns) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </tbody>\n  </table>\n";
},"2":function(depth0,helpers,partials,data) {
    return "          <th>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</th>\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <tr>\n            <td class=\"time\">"
    + alias3(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timestamp","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"speaker-name\">"
    + alias3(((helper = (helper = helpers.speakerName || (depth0 != null ? depth0.speakerName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"speakerName","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"speech\">"
    + alias3(((helper = (helper = helpers.speech || (depth0 != null ? depth0.speech : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"speech","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>\n              <div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hasAccompanyingMedia : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "              </div>\n            </td>\n          </tr>\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.accompanyingMedia || (depth0 != null ? depth0.accompanyingMedia : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"accompanyingMedia","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.accompanyingMedia) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                <img src=\""
    + alias3(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"source","hash":{},"data":data}) : helper)))
    + "\"\n                     class=\"accompanying-media\n                            img-responsive\"\n                     alt=\""
    + alias3(((helper = (helper = helpers.altText || (depth0 != null ? depth0.altText : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"altText","hash":{},"data":data}) : helper)))
    + "\">\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.episodes : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});
})();