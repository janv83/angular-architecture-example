MovieDB.App.directive('scrollable', function ()
{
	return {
		restrict: 'E',
		link: function (scope, element, attrs)
		{
            function Scrollbar($elem) {

                var $wrapper = $('.scrollWrapper', $elem);
                var $container = $('.scrollContainer', $elem);
                var $content = $('.scrollContent', $elem);
                var $track = $('.scrollTrack', $elem);
                var $handle = $('.scrollHandle', $elem);

                var wrapperHeight = $wrapper.height();
                var contentHeight = $content.height();
                var handleHeight = 0;
                var muteScrollEvent = false;

                function calculateHandleHeight() {
                    wrapperHeight = $wrapper.height();
                    contentHeight = $content.height();
                    var percent = wrapperHeight * 100 / contentHeight;
                    var result = wrapperHeight * percent / 100;
                    handleHeight = result;
                    $handle.height(result);
                    return result;
                }

                function calculateHandlePosition() {
                    var scrollTopPercent = $container.scrollTop() * 100 / contentHeight;
                    $handle.css({
                        top: wrapperHeight * scrollTopPercent / 100
                    });
                }

                function calculateScrollTopByHandlePosition() {
                    var handlePosY = $handle.position().top;
                    var handlePosYPercent = handlePosY * 100 / wrapperHeight;

                    muteScrollEvent = true;
                    $container.scrollTop(contentHeight * handlePosYPercent / 100);
                }

                // events
                $container.scroll(function() {
                    if(muteScrollEvent) {
                        muteScrollEvent = false;
                        return;
                    }
                    calculateHandlePosition();
                });
                $handle.draggable({ containment: "parent" });
                $handle.on('drag', function() {
                    calculateScrollTopByHandlePosition();
                });

                (function update() {
                    window.setTimeout(update, 1000);
                    calculateHandleHeight();
                })();

                // kick off
                calculateHandleHeight();
                calculateHandlePosition();
            }

            var scrollbarApi = new Scrollbar(element);
		}
	};
});