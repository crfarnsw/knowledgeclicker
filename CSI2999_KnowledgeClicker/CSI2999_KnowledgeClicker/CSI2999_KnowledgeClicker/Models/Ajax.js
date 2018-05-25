var Ajax;
(function (Ajax) {
    var Options = (function () {
        function Options(url, method, data) {
            this.url = url;
            this.method = method || "get";
            this.data = data || {};
        }
        return Options;
    }());
    Ajax.Options = Options;
    var Service = (function () {
        function Service() {
            var _this = this;
            this.request = function (options, successCallback, errorCallback) {
                var that = _this;
                $.ajax({
                    url: options.url,
                    type: options.method,
                    data: options.data,
                    cache: false,
                    success: function (d) {
                        successCallback(d);
                    },
                    error: function (d) {
                        if (errorCallback) {
                            errorCallback(d);
                            return;
                        }
                        var errorTitle = "Error in (" + options.url + ")";
                        var fullError = JSON.stringify(d);
                        console.log(errorTitle);
                        console.log(fullError);
                        that.showJqueryDialog(fullError, errorTitle);
                    }
                });
            };
            this.get = function (url, successCallback, errorCallback) {
                _this.request(new Options(url), successCallback, errorCallback);
            };
            this.getWithDataInput = function (url, data, successCallback, errorCallback) {
                _this.request(new Options(url, "get", data), successCallback, errorCallback);
            };
            this.post = function (url, successCallback, errorCallback) {
                _this.request(new Options(url, "post"), successCallback, errorCallback);
            };
            this.postWithData = function (url, data, successCallback, errorCallback) {
                _this.request(new Options(url, "post", data), successCallback, errorCallback);
            };
            this.showJqueryDialog = function (message, title, height) {
                alert(title + "\n" + message);
                title = title || "Info";
                height = height || 120;
                message = message.replace("\r", "").replace("\n", "<br/>");
                $("<div title='" + title + "'><p>" + message + "</p></div>").dialog({
                    minHeight: height,
                    minWidth: 400,
                    maxHeight: 500,
                    modal: true,
                    buttons: {
                        Ok: function () { $(this).dialog('close'); }
                    }
                });
            };
        }
        return Service;
    }());
    Ajax.Service = Service;
})(Ajax || (Ajax = {}));
//# sourceMappingURL=Ajax.js.map