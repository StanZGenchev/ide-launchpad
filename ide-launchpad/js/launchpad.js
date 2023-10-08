/*
 * Copyright (c) 2010-2023 SAP SE or an SAP affiliate company and Eclipse Dirigible contributors
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-FileCopyrightText: 2010-2021 SAP SE or an SAP affiliate company and Eclipse Dirigible contributors
 * SPDX-License-Identifier: EPL-2.0
 */
const launchpad = angular.module("launchpad", ["ngResource", "ideLayout", "ideUI"]);
launchpad.controller("LaunchpadViewController", ["$scope", "Subviews", function ($scope, Subviews) {
    $scope.subviewList = ['example-subview'];
    // Subviews.getIdList().then(
    //     function (list) {
    //         $scope.$apply(function () {
    //             $scope.subviewList = list;
    //         });
    //     },
    //     function (error) {
    //         console.error(error);
    //     });
}]);
