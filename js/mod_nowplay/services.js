define(function(require) {
    'use strict';

    return angular.module('mod_nowplay.services', [])
        .factory('TweetService', ['$http', '$q',
            function($http, $q) {
                function postTweet(message) {
                    console.log('aca me llego'+message);
                    var deferred = $q.defer();
                    $http({
                        method: 'GET',
                        url: '/tweet-it',
                        params:{
                            message: message
                        },
                    }).success(function(data) {
                        deferred.resolve(data);
                    });
                    return deferred.promise;
                }
                return {
                    postTweet: postTweet,
                }
            }

        ])
});