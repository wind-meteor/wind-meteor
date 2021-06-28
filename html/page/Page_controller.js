angular.module('Page.controller', [])
	.controller('PageCtrl', function($scope, $state) {
		$scope.slideHasChanged = function(index) {
			var item = $("#tips-" + index);
			if (item.hasClass("hidden")) {
				item.removeClass("hidden");
				item.addClass("start-show");
			}

			if (index == 0 || index == 2) {
				$("#tips-1").removeClass("start-show");
				$("#tips-1").addClass("hidden");
			} else if (index == 1) {
				$("#tips-0").removeClass("start-show");
				$("#tips-0").addClass("hidden");
			} else if (index == 1 || index == 3) {
				$("#tips-2").removeClass("start-show");
				$("#tips-2").addClass("hidden");
			}
		}

		$scope.func_goHome = function() {
			localStorage["isFirst"] = true;
			$state.go('nav.home');
		}
	})
