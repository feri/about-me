Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");
const Cc = Components.classes;
const Ci = Components.interfaces;

function AboutMe() {}
AboutMe.prototype = {
  newChannel : function(aURI)
  {
    if(!aURI.spec == "about:me") return;
    var ios = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);
    var channel = ios.newChannel("chrome://aboutme/content/aboutMe.xhtml", null, null);
    channel.originalURI = aURI;
    return channel;
  },

  getURIFlags: function(aURI)
  {
    return Ci.nsIAboutModule.ALLOW_SCRIPT;
  },

  classID: Components.ID("{5cc26918-9daa-4124-a742-29a1dba85fbd}"),
  QueryInterface: XPCOMUtils.generateQI([Ci.nsIAboutModule])
}

var NSGetFactory = XPCOMUtils.generateNSGetFactory([AboutMe]);
