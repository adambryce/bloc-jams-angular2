 (function() {
<<<<<<< HEAD
    function SongPlayer($rootScope, Fixtures) {
        var SongPlayer = {};

=======
    function SongPlayer(Fixtures) {
        var SongPlayer = {};
                
>>>>>>> b03aecb8867b2f68863d2f4d24f79349c3f111ff
        /**
        * @desc Uses getAlbum method to store album information
        * @type {Object}
        */
        var currentAlbum = Fixtures.getAlbum();
<<<<<<< HEAD

=======
        
>>>>>>> b03aecb8867b2f68863d2f4d24f79349c3f111ff
        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;
<<<<<<< HEAD

=======
        
>>>>>>> b03aecb8867b2f68863d2f4d24f79349c3f111ff
        /**
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }
<<<<<<< HEAD

=======
 
>>>>>>> b03aecb8867b2f68863d2f4d24f79349c3f111ff
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
<<<<<<< HEAD

            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                    SongPlayer.currentTime = currentBuzzObject.getTime();
                });
            });
            
            SongPlayer.currentSong = song;
        };

=======
 
            SongPlayer.currentSong = song;
        };
        
>>>>>>> b03aecb8867b2f68863d2f4d24f79349c3f111ff
        /**
        * @function playSong
        * @desc Plays the current sound file
        * @param {Object} song
        */
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        };
<<<<<<< HEAD

=======
        
>>>>>>> b03aecb8867b2f68863d2f4d24f79349c3f111ff
        /**
        * @function stopSong
        * @desc Stop a song
        * @param {Object} song
        */
        var stopSong = function(song) {
            currentBuzzObject.stop();
            song.playing = null;
        };
        
        /**
        * @function getSongIndex
        * @desc Gets the index of a song
        * @param {Object} song
        */
        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        };
        
        /**
        * @desc current song holder
        * @type {Object}
        */
        SongPlayer.currentSong = null;
<<<<<<< HEAD

        /**
        * @desc Current playback time (in seconds) of currently playing song
        * @type {Number}
        */
        SongPlayer.currentTime = null;
        
        /**
        * @desc Volume used for songs
        * @type {Number}
        */
        SongPlayer.volume = 80;
=======
>>>>>>> b03aecb8867b2f68863d2f4d24f79349c3f111ff
        
        /**
        * @function play
        * @desc Play current or new song
        * @param {Object} song
        */
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
                setSong(song);
                playSong(song);
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
            }
        };
        
        /**
        * @function pause
        * @desc Pauses current song
        * @param {Object} song
        */
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };
<<<<<<< HEAD

=======
        
>>>>>>> b03aecb8867b2f68863d2f4d24f79349c3f111ff
        /**
        * @function previous
        * @desc Get the index of the currently playing song & decrease index by one
        * @param {Object}
        */
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
<<<<<<< HEAD

=======
            
>>>>>>> b03aecb8867b2f68863d2f4d24f79349c3f111ff
            if (currentSongIndex < 0) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
<<<<<<< HEAD

=======
        
>>>>>>> b03aecb8867b2f68863d2f4d24f79349c3f111ff
        /**
        * @function next
        * @desc Get the index of the currently playing song & decrease index by one
        * @param {Object}
        */
        SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            
            var lastSongIndex = currentAlbum.songs.length - 1
            
            if (currentSongIndex > lastSongIndex) {
                stopSong(SongPlayer.currentSong);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
<<<<<<< HEAD

        /**
        * @function setCurrentTime
        * @desc Set current time (in seconds) of currently playing song
        * @param {Number} time
        */
        SongPlayer.setCurrentTime = function(time) {
            if (currentBuzzObject) {
                currentBuzzObject.setTime(time);
            }
        };
        
        /**
        * @function setVolume
        * @desc Set volume for songs
        * @param {Number} volume
        */
        SongPlayer.setVolume = function(volume) {
            if (currentBuzzObject) {
                currentBuzzObject.setVolume(volume);
            }
            SongPlayer.volume = volume;
        };
        
        return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
=======
        
        return SongPlayer;
    }
 
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
>>>>>>> b03aecb8867b2f68863d2f4d24f79349c3f111ff
 })();