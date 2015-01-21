(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['transcriptTemplate'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing, buffer = "  <table class=\"table\n                table-hover\n                transdown-output\">\n    <thead>\n      <tr>\n        <th class=\"episode-title\" colspan=\""
    + escapeExpression(((helper = (helper = helpers.numberOfColumns || (depth0 != null ? depth0.numberOfColumns : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"numberOfColumns","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</th>\n      </tr>\n      <tr>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.columns : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "      </tr>\n    </thead>\n\n    <tbody>\n";
  stack1 = ((helper = (helper = helpers.turns || (depth0 != null ? depth0.turns : depth0)) != null ? helper : helperMissing),(options={"name":"turns","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.turns) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </tbody>\n  </table>\n";
},"2":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "          <td>"
    + escapeExpression(lambda(depth0, depth0))
    + "</td>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "          <tr>\n            <td class=\"time\">"
    + escapeExpression(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"timestamp","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"speaker-name\">"
    + escapeExpression(((helper = (helper = helpers.speakerName || (depth0 != null ? depth0.speakerName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"speakerName","hash":{},"data":data}) : helper)))
    + "</td>\n            <td class=\"speech\">"
    + escapeExpression(((helper = (helper = helpers.speech || (depth0 != null ? depth0.speech : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"speech","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>\n              <img src=\""
    + escapeExpression(((helper = (helper = helpers.accompanyingMedia || (depth0 != null ? depth0.accompanyingMedia : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"accompanyingMedia","hash":{},"data":data}) : helper)))
    + "\"\n                     class=\"accompanying-media\"></td>\n          </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.episodes : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"useData":true});
})();